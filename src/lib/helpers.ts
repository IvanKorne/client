type NumberFormatOptions = {
  isMonetary?: boolean;
};

export const formatLargeNumber = (
  number: number,
  options: NumberFormatOptions = {}
): string => {
  const { isMonetary = false } = options;
  const absNumber = Math.abs(number);
  const prefix = number < 0 ? "-" : "";
  const formattedNumber = (() => {
    if (absNumber < 1000) {
      return absNumber.toString();
    } else if (absNumber < 1000000) {
      return (absNumber / 1000).toFixed(1) + "K";
    } else if (absNumber < 1000000000) {
      return (absNumber / 1000000).toFixed(1) + "M";
    } else if (absNumber < 1000000000000) {
      return (absNumber / 1000000000).toFixed(1) + "B";
    } else {
      return (absNumber / 1000000000000).toFixed(1) + "T";
    }
  })();

  const formattedWithPrefix = prefix + formattedNumber;
  return isMonetary ? `$${formattedWithPrefix}` : formattedWithPrefix;
};

export const formatRatio = (ratio: number): string => {
  return ratio.toFixed(2);
};
