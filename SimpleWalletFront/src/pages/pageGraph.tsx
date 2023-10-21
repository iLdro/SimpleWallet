import React from "react";
import { ResponsiveLine } from "@nivo/line";
//import Graph from "../component/Graph"; 
import PropType from 'prop-types'
import axios from 'axios';
import { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import moment from 'moment';
import 'chartjs-adapter-moment';

function PageGraph() {

      const id = "652e8f2d0e15c03b283c8cc1";
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
   
   

    const [rawData, setRawData] = useState<[Date, number][]>([]);
    console.log("RAW DATA")
    console.log(rawData);



    const graphStyle = {
        width: "800px",
        height: "400px",
        border: "1px solid #ccc",
        theme: {
            fontFamily: "Arial, sans-serif", // Specify the font family
            fontSize: 14, // Specify the font size
            textColor: "#333" // Specify the text color
          }
      };
      
      
    useEffect(() => {
      axios.get('http://localhost:3000/getDataGraph?id=' + id)
        .then((response) => {
          console.log("RESPONSE FETCH DATA GRAPH");
          console.log(response.data);
          const backData = response.data;
          const rawData = backData.datas.map((item: { y: string; x: number }) => [new Date(item.y), item.x]);
          rawData.sort((a, b) => a[0].getTime() - b[0].getTime());
          console.log("RAW DATA");
          console.log(rawData);

          let canvas = document.getElementById('myChart') as HTMLCanvasElement;
          if (canvas) {
            let ctx = canvas.getContext('2d');
            if (ctx) {
              if (window.myChart instanceof Chart) {
                window.myChart.destroy();
              }

              window.myChart = new Chart(ctx, {
                type: 'line',
                data: {
                  labels: rawData.map((item: [Date, number]) => item[0]), // Dates
                  datasets: [{
                    label: 'My Dataset',
                    data: rawData.map((item: [Date, number]) => item[1]), // Corresponding values
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
                        unit: 'year'
                      }
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
      
      /*
      const [minX, setMinX] = useState(Infinity);
      const [maxX, setMaxX] = useState(-Infinity);
      const [minY, setMinY] = useState(new Date('9999-12-31').getTime());
      const [maxY, setMaxY] = useState(new Date('0000-01-01').getTime());
      
      useEffect(() => {
        let localMinX = Infinity, localMaxX = -Infinity;
        let localMinY = new Date('9999-12-31').getTime(), localMaxY = new Date('0000-01-01').getTime();
      
        const xyPairs = rawData.map(point => {
          const y = new Date(point[0]).getTime();
          const x = point[1];
          localMinX = Math.min(localMinX, x);
          localMaxX = Math.max(localMaxX, x);
          localMinY = Math.min(localMinY, y);
          localMaxY = Math.max(localMaxY, y);
          return [x, y];
        });
      
        setMinX(localMinX);
        setMaxX(localMaxX);
        setMinY(localMinY);
        setMaxY(localMaxY);
      
        console.log(xyPairs); // Log the array of [x, y] pairs
      }, [rawData]);  // This effect runs whenever rawData changes
      
      const xTickValues = Array.from({length: 10}, (_, i) => minX + (maxX - minX) * i / 9);
      const yTickValues = Array.from({length: 10}, (_, i) => minY + (maxY - minY) * i / 9)
      .map(time => new Date(time)); // Convert back to dates
      
      console.log("XTICKVALUES");
      console.log(xTickValues);
      console.log("YTICKVALUES");
      console.log(yTickValues);
      
      console.log(rawData)
      console.log("localMinX");
      console.log(minX);
      console.log("localMaxX");
      console.log(maxX);
      console.log("localMinY");
      console.log(minY);
      console.log("localMaxY");
      console.log(maxY);
    const MyResponsiveLine = ({ data }) => (
      
        <ResponsiveLine
            data={data}
            
            margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
            xScale={{ type: 'linear' }}
            yScale={{ type: 'linear', stacked: false, min: 0, max: maxY }}
            yFormat=" >-.2f"
            curve="monotoneX"
            axisTop={null}
            
            axisBottom={{
                tickValues: xTickValues,
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                format: '.2f',
                legend: 'price',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                tickValues: yTickValues,
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                format: '.2s',
                legend: 'volume',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            enableGridX={false}
            colors={{ scheme: 'spectral' }}
            lineWidth={1}
            pointSize={4}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={1}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            gridXValues={[ 0, 20, 40, 60, 80, 100, 120 ]}
            gridYValues={[ 0, 500, 1000, 1500, 2000, 2500 ]}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 140,
                    translateY: 0,
                    itemsSpacing: 2,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 12,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    );
    MyResponsiveLine.propTypes = {
        data: PropType.object.isRequired
    };
    {rawData.length > 0 && <MyResponsiveLine data={rawData} />}
    */
    const deleteAllData = () => {
      axios.post(`http://localhost:3000/clearData/${id}`)
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
      <div style={graphStyle}>
        <canvas id="myChart"></canvas>

        <button onClick={handleDeleteClick}>DELETE ALL THE DATA</button>

        {showDeleteConfirmation && (
          <div className="confirmation-modal">
            <p>Are you sure you want to delete the data?</p>
            <button onClick={deleteAllData}>Yes</button>
            <button onClick={() => setShowDeleteConfirmation(false)}>No</button>
          </div>
        )}
      </div>
    );
}
export default PageGraph;
