import React, { useCallback, useState, useEffect } from "react";
import { Container } from "./Container";
import CustomPieChart from "./CustomPieChart";
import CustomSlider from "./CustomSlider";

const arrayToMap = (array, primaryField) => {
  return array.reduce((acc, collection) => {
    acc[collection[primaryField]] = collection;
    return acc;
  }, {});
};
const convertToChartData = (currentData) => {
  const chartArray = [];
  let count = 0;
  for (const item in currentData) {
    let itemObj;
    if (item === "risk_score" || item === "_id") {
      continue;
    }
    if (item === "tbills") {
      itemObj = {
        name: "T-Bills",
        value: currentData[item],
        colorIndex: count,
      };
    } else {
      itemObj = {
        name: item
          .replace("_", " ")
          .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase()),
        value: currentData[item],
        colorIndex: count,
      };
      chartArray.push(itemObj);
      count++;
    }
  }
  return chartArray;
};

const ProfileCalculatorSection = () => {
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [weights, setWeights] = useState({});
  const [chartdata, setChartdata] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  /**
   *
   */
  useEffect(() => {
    fetch(`https://pocket-robo-server.herokuapp.com/`)
      .then((response) => {
        setLoading(false);
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          console.error("server error");
        }
      })
      .then((jsonResponse) => {
        setWeights(arrayToMap(jsonResponse.data, "risk_score"));
      })
      .catch((error) => {
        setLoading(false);
        // Handle the error
        console.log(error);
      });

    return () => {};
  }, []);
  console.log(chartdata);
  useEffect(() => {
    if (weights[0]) {
      setChartdata(convertToChartData(weights[score]));
    }
  }, [weights, score]);

  const handleChange = (e) => {
    setScore(parseInt(e.target.value));
  };

  console.log("this is score", score);
  return (
    <div className="w-full text-center flex flex-col items-center bg-black mb-16 text-white">
      <Container className="relative w-full my-16">
        <div className="flex w-full flex-col lg:flex-row">
          <div className="w-full lg:w-[60%]">
            <CustomPieChart
              chartdata={chartdata}
              onPieEnter={onPieEnter}
              activeIndex={activeIndex}
            />
          </div>
          <div className="w-full lg:w-[40%]">
            <div className="w-full text-left mt-8">
              <h5 className=" font-serif text-[48px] tracking-tight">
                Smarter investing, brilliantly personalized.
              </h5>
              <p className="mt-4">
                Just answer a few questions, and we’ll build you a personalized
                portfolio of wonderfully diversified, low-cost index funds
                designed to grow your wealth for the long term. Check out how
                our personalized portfolios have historically performed.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[21.875rem] shadow-[-9px_-1px_23px_0px_rgba(0,0,0,0.2)] flex justify-center bg-white rounded-lg py-6 flex-col items-center px-4 absolute -top-28 left-12">
          <div className="flex w-full text-gray-900 justify-between">
            <h6 className="font-bold">Risk score:{score}.0</h6>
            <p>Example porfilio</p>
          </div>
          <CustomSlider
            handleChange={handleChange}
            value={score}
            color="#631DC0"
          />
        </div>
      </Container>
    </div>
  );
};

export default ProfileCalculatorSection;
