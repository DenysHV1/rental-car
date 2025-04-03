const updateAddress = (addressInner, type) => {
    const addressArr = addressInner.split(" ").slice(3, 5);

    const firstElement = addressArr[0]
      .split("")
      .filter((item) => item !== ",")
      .join("");
      if (type === "second") {
        return `${firstElement}, ${addressArr[1]}`;
      }

    return `${firstElement}  |  ${addressArr[1]}`;
  };

  export default updateAddress;