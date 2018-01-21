import React from 'react'
import styled from 'styled-components'
import { Columns, Column, Container } from 're-bulma'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts'

const data = [
  { name: 'Page A', customers: 2400 },
  { name: 'Page B', customers: 2210 },
  { name: 'Page C', customers: 2290 },
  { name: 'Page D', customers: 2000 },
  { name: 'Page E', customers: 2181 },
  { name: 'Page F', customers: 2500 },
  { name: 'Page G', customers: 2100 }
]

const AppContainer = styled.div`
  padding: 2%;
  max-width: 90%;
  margin: auto;
`

const Card = styled.div`
  padding-top:
  width: 90%;
  height: 200px;
  background: #F8F8F8	;
  margin-top: 2%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 1.5rem;
  padding: 2%;
  color: #3a7bd5;
  text-align: center;
`

const ChartTitle = styled.h1`
  letter-spacing: 3px;
  font-size: 1.5rem;
  padding: 2%;
  text-align: center;
  background: #3a7bd5;
  color: #fff;
`

const Functions = () => (
  <div>
    <AppContainer>
      <Columns>
        <Column size="isThreeQuarters">
          <LineChart
            width={1000}
            height={500}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="customers"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </Column>

        <Column>
          <ChartTitle> When do your customers shop? </ChartTitle>
        </Column>
      </Columns>

      <Columns>
        <Column size="isOneThird">
          <Card>
            <Title>Active Customers</Title>
          </Card>
        </Column>
        <Column>
          <Card>
            <Title>Avg. Time Spent in Store</Title>
          </Card>
        </Column>
        <Column>
          <Card>
            <Title>Sales per Customer</Title>
          </Card>
        </Column>
      </Columns>
    </AppContainer>
  </div>
)

export default Functions
