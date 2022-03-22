import { KeyResultDto } from "../../models/OkrDtos";
import NoData from "./NoData";
import PersonalChart from "./PersonalChart";

const OkrPieChart = (props : {keyresults : KeyResultDto[], keyResultGoals : number[], keyResultProgress : number[],ScreenWidth : number }) => {
  return (
    <>
      {/* PIE CHART */}
      <div className=" bg-gray-600 inline-grid gap-0 justify-items-center content-center
      transform transition-all duration-1000 subgoals-landscape-height xxs:h-50vh md:h-50vh lg:h-50vh xl:h-70vh 2xl:h-50vh">
        {!props.keyresults.find((element) => element.task === "NO DATA") ? (
          props.keyresults.length > 0 &&
          props.keyResultGoals.length > 0 &&
          props.keyResultProgress.length > 0 && (
            <PersonalChart
            ScreenWidth={props.ScreenWidth}
              goal={props.keyresults.flatMap((x) => x.goal)}
              progress={props.keyresults.flatMap((x) => x.progress)}
            />
          )
        ) : (
          <NoData />
        )}
      </div>
    </>
  );
};

export default OkrPieChart;