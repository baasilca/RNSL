const validateRespose = (res: any, successErrorFlags: string[] = []) => {
  if (
    res?.data?.wsErrorFlag &&
    ['0', ...successErrorFlags].includes(res?.data?.wsErrorFlag)
  ) {
    return res.data;
  } else {
    if (
      res?.data?.wsDisplayMessage?.includes(
        'OS:Exception in getOnetFeeDetails()  java.lang.NullPointerException',
      )
    ) {
      throw new Error('something went wrong');
    } else {
      throw new Error(
        res?.data?.wsDisplayMessage ||
          res?.data?.error ||
          'something went wrong',
      );
    }
  }
};

export default validateRespose;
