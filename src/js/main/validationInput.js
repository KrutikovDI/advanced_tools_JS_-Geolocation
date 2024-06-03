export default function validationInput(data) {
  const pattern = /^-?\d+\.?\d*,{1}-?\d+\.?\d*$/;
  if (!pattern.test(data)) {
    return false;
  } else {
    const coordList = data.split(",");
    return `[${coordList[0]}, ${coordList[1]}]`;
  }
}
