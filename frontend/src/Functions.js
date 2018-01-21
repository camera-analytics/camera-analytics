import React from 'react'
import styled from 'styled-components'
import { Columns, Column, Notification } from 're-bulma'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

const data = [
  { name: 'Page A', pv: 2400, amt: 2400 },
  { name: 'Page B', pv: 1398, amt: 2210 },
  { name: 'Page C', pv: 9800, amt: 2290 },
  { name: 'Page D', pv: 3908, amt: 2000 },
  { name: 'Page E', pv: 4800, amt: 2181 },
  { name: 'Page F', pv: 3800, amt: 2500 },
  { name: 'Page G', pv: 4300, amt: 2100 }
]

const Container = styled.div`
  padding: 2%;
  max-width: 90%;
  margin: auto;
`

const Card = styled.div`
  width: 90%;
  height: 200px;
  background: #f0f0f0;
  margin-top: 2%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

const Title = styled.h1`
  text-transform: uppercase;
  letter-spacing: 5px;
  font-size: 1.5rem;
  padding: 2%;
`

const Functions = () => (
  <div>
    <Container>
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
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>

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
    </Container>
  </div>
)

export default Functions
