import MultiRangeSlider from "../slider/MultiRangeSlider";

export type price = {
  min: number
  max: number,
  setMinimum: React.Dispatch<React.SetStateAction<number>>
  setMaximum: React.Dispatch<React.SetStateAction<number>>
  setPageNumber: React.Dispatch<React.SetStateAction<number>>
} 

const Slider = (props: price) => {
    const { min, max, setMinimum, setMaximum, setPageNumber } = props  

  return (
    <MultiRangeSlider
      min={0}
      max={40000}
      setMinimum={setMinimum}
      setMaximum={setMaximum}
      onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
      setPageNumber={setPageNumber}
    />
  );
};

export default Slider;
