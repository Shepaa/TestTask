import { useFormikContext } from 'formik'
import { Button } from 'antd'
import React from 'react'

function SaveButton({loading}) {
  const {isValid} = useFormikContext();

  return <Button
    loading={loading}
    disabled={!isValid || loading}
    htmlType="submit"
  >Save</Button>;
}

export default SaveButton