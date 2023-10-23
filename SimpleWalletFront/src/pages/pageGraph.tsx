import React from "react";
import { ResponsiveLine } from "@nivo/line";
//import Graph from "../component/Graph"; 
import PropType from 'prop-types'
import axios from 'axios';
import { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import 'chartjs-adapter-moment';
import '../css/pageGraph.css';
import Layout from "./layout";

function PageGraph() {

      const id = localStorage.getItem("userId");
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
   
   

    const [rawData, setRawData] = useState<[Date, number][]>([]);
    console.log("RAW DATA")
    console.log(rawData);



    
      
      
      useEffect(() => {
        axios.get('http://localhost:3000/graphs/getDataGraph?id=' + id)
          .then((response) => {
            console.log("RESPONSE FETCH DATA GRAPH");
            console.log(response.data);
            const backData = response.data;
      
            // Separate the data into two arrays based on the category
            let cashData = backData.datas
            .filter((item: { y: string; x: number; category: string }) => item.category === 'Cash payment')
            .map((item: { y: string; x: number }) => {
              let date = new Date(item.y);
              date.setHours(0, 0, 0, 0);
              return [date, item.x];
            });

          let cardData = backData.datas
            .filter((item: { y: string; x: number; category: string }) => item.category === 'Card payment')
            .map((item: { y: string; x: number }) => {
              let date = new Date(item.y);
              date.setHours(0, 0, 0, 0);
              return [date, item.x];
            });
            const groupByDate = (data: [Date, number][]) => {
              const grouped: { [key: string]: number } = {};
            
              data.forEach(([date, payment]) => {
                const dateStr = date.toISOString().split('T')[0]; // Get the date part of the ISO string
            
                if (grouped[dateStr]) {
                  grouped[dateStr] += payment;
                } else {
                  grouped[dateStr] = payment;
                }
              });
            
              // Convert the grouped data back to an array
              const result = Object.entries(grouped).map(([dateStr, totalPayment]) => [new Date(dateStr), totalPayment]);
            
              return result;
            };
            
            cashData = groupByDate(cashData);
            cardData = groupByDate(cardData);
            // Sort the data by date
            cashData.sort((a, b) => a[0].getTime() - b[0].getTime());
            cardData.sort((a, b) => a[0].getTime() - b[0].getTime());
      
            console.log("CASH DATA");
            console.log(cashData);
            console.log("CARD DATA");
            console.log(cardData);
      
            let canvasCash = document.getElementById('myChartCash') as HTMLCanvasElement;
            let canvasCard = document.getElementById('myChartCard') as HTMLCanvasElement;

            if (canvasCash && canvasCard) {
              let ctxCash = canvasCash.getContext('2d');
              let ctxCard = canvasCard.getContext('2d');

              if (ctxCash && ctxCard) {
                if (window.myChartCash instanceof Chart) {
                  window.myChartCash.destroy();
                }
                if (window.myChartCard instanceof Chart) {
                  window.myChartCard.destroy();
                }

                window.myChartCash = new Chart(ctxCash, {
                  type: 'line',
                  data: {
                    labels: cashData.map((item: [Date, number]) => item[0]), // Dates
                    datasets: [{
                      label: 'Cash Payment',
                      data: cashData.map((item: [Date, number]) => item[1]), // Corresponding values
                      fill: false,
                      borderColor: 'rgb(75, 192, 192)',
                      tension: 0.1
                    }]
                  },
                  options: {
                    scales: {
                      x: {
                        type: 'time',
                        time: {
                          unit: 'day',
                          displayFormats: {
                            day: 'MMM D' // Format for the x-axis labels
                          }
                        }
                      },
                      y: {
                        min: 0
                      }
                    }
                  }
                });
                
                window.myChartCard = new Chart(ctxCard, {
                  type: 'line',
                  data: {
                    labels: cardData.map((item: [Date, number]) => item[0]), // Dates
                    datasets: [{
                      label: 'Card Payment',
                      data: cardData.map((item: [Date, number]) => item[1]), // Corresponding values
                      fill: false,
                      borderColor: 'rgb(255, 99, 132)',
                      tension: 0.1
                    }]
                  },
                  options: {
                    scales: {
                      x: {
                        type: 'time',
                        time: {
                          unit: 'day',
                          displayFormats: {
                            day: 'MMM D' // Format for the x-axis labels
                          }
                        }
                      },
                      y: {
                        min: 0
                      }
                    }
                  }
                });
                
              }
            }

          }, (error) => {
            console.log(error);
          });
      }, []);
      
     
    const deleteAllData = () => {
      axios.post(`http://localhost:3000/graphs/clearData/${id}`)
        .then((response) => {
          console.log("RESPONSE CLEAR DATA");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      setShowDeleteConfirmation(false);
    };

    const handleDeleteClick = () => {
      setShowDeleteConfirmation(true);
    };
    

    return (
      <div >
        <Layout/>
        <canvas id="myChartCash"></canvas>
        <canvas id="myChartCard"></canvas>

        <button id= "deleteData"onClick={handleDeleteClick}>DELETE ALL THE DATA</button>

        {showDeleteConfirmation && (
          <div className="confirmation-modal">
            <p>Are you sure you want to delete the data?</p>
            <button id= "deleteDataCheck" onClick={deleteAllData}>Yes</button>
            <button  id= "deleteDataCheck" onClick={() => setShowDeleteConfirmation(false)}>No</button>
          </div>
        )}
      </div>
    );
}
export default PageGraph;
