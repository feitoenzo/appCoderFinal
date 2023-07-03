import { Dimensions, useEffect, useState } from 'react-native';

const useOrientationListener = () => {
  const [vertical, setVertical] = useState(true);

  const onVertical = () => {
    const dim = Dimensions.get("screen");
    return dim.height > dim.width;
  };

  const stateVertical = () => {
    setVertical(onVertical());
  };

  useEffect(() => {
    Dimensions.addEventListener("change", stateVertical);

    return () => {
      Dimensions.removeEventListener("change", stateVertical);
    };
  }, []);

  return vertical;
};

export default useOrientationListener;
