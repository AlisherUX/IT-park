import { Select } from "antd";
import {
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { format, parseISO, subDays } from "date-fns";
import SmallTitle from "@/components/smallTitle";
import {
  ChartSelectIcon,
  LastWeekDotIcon,
  ThisWeekDotIcon,
  ThreeDotIcon,
} from "@/assets/icons";

const data = [];
for (let num = 6; num >= 0; num--) {
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: 1 + Math.random(),
    value2: 1 + Math.random(),
  });
}

const handleChange = (value) => {
  return `selected ${value}`;
};

export default function Chart() {
  return (
    <div className="chart">
      <div className="chart__top">
        <SmallTitle text={"Progress"} />
        <div className="chart__actions">
          <div className="chart__items">
            <div className="chart__item">
              <LastWeekDotIcon />
              <span className="chart__week">Last Week</span>
            </div>
            <div className="chart__item">
              <ThisWeekDotIcon />
              <span className="chart__week">This Week</span>
            </div>
          </div>
          <div className="chart__items">
            <Select
              suffixIcon={<ChartSelectIcon />}
              defaultValue="This Week"
              onChange={handleChange}
              options={[
                {
                  value: "this",
                  label: "This Week",
                },
                {
                  value: "last",
                  label: "Last Week",
                },
              ]}
            />
            <ThreeDotIcon />
          </div>
        </div>
      </div>
      <AreaChart data={data} width={698} height={228}>
        <defs>
          <linearGradient
            id="color"
            x1="349"
            y1="-108"
            x2="349"
            y2="139"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.5" stopColor="#166199" />
            <stop offset="1" stopColor="#166199" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="color2"
            x1="349"
            y1="-236.5"
            x2="349"
            y2="166"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.5" stopColor="#EBB43F" />
            <stop offset="1" stopColor="#EBB43F" stopOpacity="0" />
          </linearGradient>
        </defs>
        <Area
          dataKey="value"
          strokeWidth="4px"
          stroke="#166199"
          fill="url(#color)"
        />
        <Area
          dataKey="value2"
          strokeWidth="4px"
          stroke="#FEC64F"
          fill="url(#color2)"
        />
        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickFormatter={(str) => {
            const date = parseISO(str);
            if (date.getDate()) {
              return format(date, "eee");
            }
            return "";
          }}
          tick={{
            fontSize: 14,
            fontWeight: 400,
            fill: "#A098AE",
          }}
        />
        <YAxis
          datakey="value"
          axisLine={false}
          tickLine={false}
          tickCount={5}
          tick={{
            fontSize: 14,
            fontWeight: 400,
            fill: "#A098AE",
          }}
        />
        <Tooltip content={<CustomTooltip />} />
        <CartesianGrid stroke="#DBDBDB" />
      </AreaChart>
    </div>
  );
}

function CustomTooltip({ active, label }) {
  if (active) {
    return (
      <div className="tooltip">
        <p>{format(parseISO(label), "eee, d MMM, yyyy")}</p>
      </div>
    );
  }
  return null;
}
