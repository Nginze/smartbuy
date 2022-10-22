import { Stack } from '@mui/system'
import React from 'react'
import Review from './Review'

const ReviewFeed = () => {
  return (
    <Stack justifyContent={"flex-start"} width={"100%"}>
        <Review username ={"Jack Maaye"} comment={"Really good products"} imgUrl={"https://media.istockphoto.com/photos/headshot-portrait-of-smiling-male-employee-in-office-picture-id1309328823?b=1&k=20&m=1309328823&s=170667a&w=0&h=a-f8vR5TDFnkMY5poQXfQhDSnK1iImIfgVTVpFZi_KU="}/>
        <Review username ={"Kweku Owusu"} comment={"Good services rendered thank you!"} imgUrl={"data:image/jpeg;base64,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"}/>
        <Review username ={"Linda Ofori"}/>
    </Stack>
  )
}

export default ReviewFeed