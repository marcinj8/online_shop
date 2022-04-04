export const sendData = (e, formState) => {
    e.preventDefault();
    const dataToSend = Object.keys(formState).map((element) => {
      return { [element]: formState[element].value };
    });
    dataToSend.pop();
    console.log(dataToSend);
  };