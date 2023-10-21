import React from "react";
import { ResponsiveLine } from "@nivo/line";
//import Graph from "../component/Graph"; 
import PropType from 'prop-types'
import axios from 'axios';


function PageGraph() {
    const id = "652e8f2d0e15c03b283c8cc1";
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
    axios.get('http://localhost:3000/getDataGraph?id=' + id)
      .then((response) => {
        console.log("RESPONSE FETCH DATA GRAPH")
        console.log(response.data);
        const backData = response.data;
        const rawData = backData.datas.map((item: {  y: Date , x: number }) => [item.y, item.x]);
        console.log("RAW DATA");
        console.log(rawData);
      }, (error) => {
        console.log(error);
      });
    
    
    const barData = [{
        "id": "japan",
       
        "data": [
          {
            "x": 0,
            "y": 184
          },
          {
            "x": 1,
            "y": 148
          },
          {
            "x": 2,
            "y": 37
          },
          {
            "x": 3,
            "y": 200
          },
          {
            "x": 4,
            "y": 268
          },
          {
            "x": 5,
            "y": 117
          },
          {
            "x": 6,
            "y": 134
          },
          {
            "x": 7,
            "y": 240
          },
          {
            "x": 8,
            "y": 230
          },
          {
            "x": 9,
            "y": 293
          },
          {
            "x": 10,
            "y": 84
          },
          {
            "x": 11,
            "y": 57
          },
          {
            "x": 12,
            "y": 260
          },
          {
            "x": 13,
            "y": 235
          },
          {
            "x": 14,
            "y": 156
          },
          {
            "x": 15,
            "y": 201
          },
          {
            "x": 16,
            "y": 213
          },
          {
            "x": 17,
            "y": 248
          },
          {
            "x": 18,
            "y": 169
          },
          {
            "x": 19,
            "y": 282
          },
          {
            "x": 20,
            "y": 110
          },
          {
            "x": 21,
            "y": 34
          },
          {
            "x": 22,
            "y": 170
          },
          {
            "x": 23,
            "y": 31
          },
          {
            "x": 24,
            "y": 152
          },
          {
            "x": 25,
            "y": 280
          },
          {
            "x": 26,
            "y": 221
          },
          {
            "x": 27,
            "y": 69
          },
          {
            "x": 28,
            "y": 202
          },
          {
            "x": 29,
            "y": 174
          },
          {
            "x": 30,
            "y": 253
          },
          {
            "x": 31,
            "y": 110
          },
          {
            "x": 32,
            "y": 56
          },
          {
            "x": 33,
            "y": 22
          },
          {
            "x": 34,
            "y": 70
          },
          {
            "x": 35,
            "y": 93
          },
          {
            "x": 36,
            "y": 19
          },
          {
            "x": 37,
            "y": 40
          },
          {
            "x": 38,
            "y": 203
          },
          {
            "x": 39,
            "y": 173
          },
          {
            "x": 40,
            "y": 83
          },
          {
            "x": 41,
            "y": 146
          },
          {
            "x": 42,
            "y": 38
          },
          {
            "x": 43,
            "y": 88
          },
          {
            "x": 44,
            "y": 135
          },
          {
            "x": 45,
            "y": 16
          },
          {
            "x": 46,
            "y": 74
          },
          {
            "x": 47,
            "y": 288
          },
          {
            "x": 48,
            "y": 149
          },
          {
            "x": 49,
            "y": 244
          },
          {
            "x": 50,
            "y": 79
          },
          {
            "x": 51,
            "y": 60
          },
          {
            "x": 52,
            "y": 256
          },
          {
            "x": 53,
            "y": 228
          },
          {
            "x": 54,
            "y": 110
          },
          {
            "x": 55,
            "y": 116
          },
          {
            "x": 56,
            "y": 180
          },
          {
            "x": 57,
            "y": 64
          },
          {
            "x": 58,
            "y": 124
          },
          {
            "x": 59,
            "y": 247
          },
          {
            "x": 60,
            "y": 64
          },
          {
            "x": 61,
            "y": 270
          },
          {
            "x": 62,
            "y": 215
          },
          {
            "x": 63,
            "y": 10
          },
          {
            "x": 64,
            "y": 54
          },
          {
            "x": 65,
            "y": 99
          },
          {
            "x": 66,
            "y": 130
          },
          {
            "x": 67,
            "y": 112
          },
          {
            "x": 68,
            "y": 65
          },
          {
            "x": 69,
            "y": 250
          },
          {
            "x": 70,
            "y": 71
          },
          {
            "x": 71,
            "y": 72
          },
          {
            "x": 72,
            "y": 118
          },
          {
            "x": 73,
            "y": 146
          },
          {
            "x": 74,
            "y": 223
          },
          {
            "x": 75,
            "y": 224
          },
          {
            "x": 76,
            "y": 3
          },
          {
            "x": 77,
            "y": 92
          },
          {
            "x": 78,
            "y": 236
          },
          {
            "x": 79,
            "y": 171
          },
          {
            "x": 80,
            "y": 136
          },
          {
            "x": 81,
            "y": 57
          },
          {
            "x": 82,
            "y": 267
          },
          {
            "x": 83,
            "y": 291
          },
          {
            "x": 84,
            "y": 260
          },
          {
            "x": 85,
            "y": 58
          },
          {
            "x": 86,
            "y": 28
          },
          {
            "x": 87,
            "y": 206
          },
          {
            "x": 88,
            "y": 54
          },
          {
            "x": 89,
            "y": 166
          },
          {
            "x": 90,
            "y": 197
          },
          {
            "x": 91,
            "y": 187
          },
          {
            "x": 92,
            "y": 190
          },
          {
            "x": 93,
            "y": 152
          },
          {
            "x": 94,
            "y": 148
          },
          {
            "x": 95,
            "y": 166
          },
          {
            "x": 96,
            "y": 120
          },
          {
            "x": 97,
            "y": 28
          },
          {
            "x": 98,
            "y": 169
          },
          {
            "x": 99,
            "y": 175
          },
          {
            "x": 100,
            "y": 75
          },
          {
            "x": 101,
            "y": 252
          },
          {
            "x": 102,
            "y": 272
          },
          {
            "x": 103,
            "y": 82
          },
          {
            "x": 104,
            "y": 18
          },
          {
            "x": 105,
            "y": 26
          },
          {
            "x": 106,
            "y": 258
          },
          {
            "x": 107,
            "y": 3
          },
          {
            "x": 108,
            "y": 265
          },
          {
            "x": 109,
            "y": 181
          },
          {
            "x": 110,
            "y": 108
          },
          {
            "x": 111,
            "y": 50
          }
        ]
      },
      {
        "id": "brazil",
        "color": "hsl(284, 70%, 50%)",
        "data": [
          {
            "x": 0,
            "y": 297
          },
          {
            "x": 1,
            "y": 99
          },
          {
            "x": 2,
            "y": 65
          },
          {
            "x": 3,
            "y": 110
          },
          {
            "x": 4,
            "y": 11
          },
          {
            "x": 5,
            "y": 118
          },
          {
            "x": 6,
            "y": 207
          },
          {
            "x": 7,
            "y": 170
          },
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 9,
            "y": 193
          },
          {
            "x": 10,
            "y": 178
          },
          {
            "x": 11,
            "y": 146
          },
          {
            "x": 12,
            "y": 297
          },
          {
            "x": 13,
            "y": 12
          },
          {
            "x": 14,
            "y": 62
          },
          {
            "x": 15,
            "y": 113
          },
          {
            "x": 16,
            "y": 172
          },
          {
            "x": 17,
            "y": 207
          },
          {
            "x": 18,
            "y": 241
          },
          {
            "x": 19,
            "y": 58
          },
          {
            "x": 20,
            "y": 207
          },
          {
            "x": 21,
            "y": 281
          },
          {
            "x": 22,
            "y": 68
          },
          {
            "x": 23,
            "y": 257
          },
          {
            "x": 24,
            "y": 192
          },
          {
            "x": 25,
            "y": 91
          },
          {
            "x": 26,
            "y": 12
          },
          {
            "x": 27,
            "y": 242
          },
          {
            "x": 28,
            "y": 257
          },
          {
            "x": 29,
            "y": 106
          },
          {
            "x": 30,
            "y": 201
          },
          {
            "x": 31,
            "y": 260
          },
          {
            "x": 32,
            "y": 96
          },
          {
            "x": 33,
            "y": 158
          },
          {
            "x": 34,
            "y": 288
          },
          {
            "x": 35,
            "y": 210
          },
          {
            "x": 36,
            "y": 164
          },
          {
            "x": 37,
            "y": 214
          },
          {
            "x": 38,
            "y": 132
          },
          {
            "x": 39,
            "y": 19
          },
          {
            "x": 40,
            "y": 95
          },
          {
            "x": 41,
            "y": 147
          },
          {
            "x": 42,
            "y": 57
          },
          {
            "x": 43,
            "y": 279
          },
          {
            "x": 44,
            "y": 231
          },
          {
            "x": 45,
            "y": 37
          },
          {
            "x": 46,
            "y": 290
          },
          {
            "x": 47,
            "y": 237
          },
          {
            "x": 48,
            "y": 184
          },
          {
            "x": 49,
            "y": 88
          },
          {
            "x": 50,
            "y": 17
          },
          {
            "x": 51,
            "y": 148
          },
          {
            "x": 52,
            "y": 41
          },
          {
            "x": 53,
            "y": 144
          },
          {
            "x": 54,
            "y": 201
          },
          {
            "x": 55,
            "y": 272
          },
          {
            "x": 56,
            "y": 178
          },
          {
            "x": 57,
            "y": 62
          },
          {
            "x": 58,
            "y": 69
          },
          {
            "x": 59,
            "y": 108
          },
          {
            "x": 60,
            "y": 167
          },
          {
            "x": 61,
            "y": 241
          },
          {
            "x": 62,
            "y": 261
          },
          {
            "x": 63,
            "y": 139
          },
          {
            "x": 64,
            "y": 37
          },
          {
            "x": 65,
            "y": 271
          },
          {
            "x": 66,
            "y": 298
          },
          {
            "x": 67,
            "y": 13
          },
          {
            "x": 68,
            "y": 223
          },
          {
            "x": 69,
            "y": 211
          },
          {
            "x": 70,
            "y": 174
          },
          {
            "x": 71,
            "y": 39
          },
          {
            "x": 72,
            "y": 211
          },
          {
            "x": 73,
            "y": 131
          },
          {
            "x": 74,
            "y": 84
          },
          {
            "x": 75,
            "y": 289
          },
          {
            "x": 76,
            "y": 157
          },
          {
            "x": 77,
            "y": 77
          },
          {
            "x": 78,
            "y": 136
          },
          {
            "x": 79,
            "y": 128
          },
          {
            "x": 80,
            "y": 295
          },
          {
            "x": 81,
            "y": 188
          },
          {
            "x": 82,
            "y": 162
          },
          {
            "x": 83,
            "y": 265
          },
          {
            "x": 84,
            "y": 129
          },
          {
            "x": 85,
            "y": 221
          },
          {
            "x": 86,
            "y": 92
          },
          {
            "x": 87,
            "y": 98
          },
          {
            "x": 88,
            "y": 5
          },
          {
            "x": 89,
            "y": 29
          },
          {
            "x": 90,
            "y": 138
          },
          {
            "x": 91,
            "y": 270
          },
          {
            "x": 92,
            "y": 283
          },
          {
            "x": 93,
            "y": 268
          },
          {
            "x": 94,
            "y": 117
          },
          {
            "x": 95,
            "y": 77
          },
          {
            "x": 96,
            "y": 206
          },
          {
            "x": 97,
            "y": 133
          },
          {
            "x": 98,
            "y": 287
          },
          {
            "x": 99,
            "y": 98
          },
          {
            "x": 100,
            "y": 147
          },
          {
            "x": 101,
            "y": 226
          },
          {
            "x": 102,
            "y": 122
          },
          {
            "x": 103,
            "y": 4
          },
          {
            "x": 104,
            "y": 231
          },
          {
            "x": 105,
            "y": 123
          },
          {
            "x": 106,
            "y": 166
          },
          {
            "x": 107,
            "y": 34
          },
          {
            "x": 108,
            "y": 188
          },
          {
            "x": 109,
            "y": 20
          },
          {
            "x": 110,
            "y": 22
          },
          {
            "x": 111,
            "y": 38
          },
          {
            "x": 112,
            "y": 167
          },
          {
            "x": 113,
            "y": 158
          },
          {
            "x": 114,
            "y": 64
          },
          {
            "x": 115,
            "y": 95
          },
          {
            "x": 116,
            "y": 284
          },
          {
            "x": 117,
            "y": 70
          },
          {
            "x": 118,
            "y": 154
          },
          {
            "x": 119,
            "y": 9
          },
          {
            "x": 120,
            "y": 205
          }
        ]
      }];
    const MyResponsiveLine = ({ data }) => (
        <ResponsiveLine
            data={data}
           
            margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
            xScale={{ type: 'linear' }}
            yScale={{ type: 'linear', stacked: true, min: 0, max: 1000 }}
            yFormat=" >-.2f"
            curve="monotoneX"
            axisTop={null}
            axisRight={{
                tickValues: [
                    0,
                    500,
                    1000
                ],
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                format: '.2s',
                legend: '',
                legendOffset: 0
            }}
            axisBottom={{
                tickValues: [
                    0,
                    20,
                    40,
                    60,
                    80,
                    100,
                    120
                ],
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                format: '.2f',
                legend: 'price',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                tickValues: [
                    0,
                    500,
                    1000,
                    
                ],
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

    return (
  
        <div style={graphStyle}>
            <MyResponsiveLine data={barData} />
        </div>
  );
}

export default PageGraph;
