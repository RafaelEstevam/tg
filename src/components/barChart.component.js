import { Chart, Interval, Tooltip } from 'bizcharts';

export default function BarChart({data}) {
    return (
        <Chart height={400} autoFit data={data} interactions={['active-region']} padding={[30, 30, 30, 50]} >
            <Interval position="year*sales" />
            <Tooltip shared />
        </Chart>
    )
}