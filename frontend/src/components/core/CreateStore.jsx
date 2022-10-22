import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import { Select, TextField, MenuItem, FormControl } from '@mui/material';
import {useForm, Controller, FormProvider, useFormContext } from "react-hook-form";

const steps = ['Fill in business details', 'Add your inventory', 'Create your store'];
const categories = ["E-commerce", "Fashion","Food & Beverages", "Service", "Electronics", "Software Development"];

const BussinessDetails = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="Business Name"
        render={({ field }) => (
          <>
          <FormControl shrink={true} fullWidth>
          <label className=''>Business name</label>
              <TextField
                id="business-name"
                variant="outlined"
                placeholder="Enter your business name"
                margin="normal"
                {...field}
              />
          </FormControl>
          </>
        )}
      /> 

      <Controller
        control={control}
        name="Business category"
        render={({ field }) => (
          <>
        <FormControl shrink={true} sx={{mt:2, }} fullWidth>
            <label className='pb-2'>Category</label>
            <Select value={categories[0]} {...field}>
                {categories && categories.map((category, key) => {
                    return <MenuItem key={key} value={category}>{category}</MenuItem>
                })}
          </Select>
        </FormControl>
 
      </>
        )}
      /> 

      <Controller
        control={control}
        name="Telephone"
        render={({ field }) => (
          <>
          <FormControl shrink={true} sx={{mt:2, }} fullWidth>
          <label className=''>Telephone</label>
              <TextField
                id="business-number"
                variant="outlined"
                placeholder="Enter your business number"
                margin="normal"
                {...field}
              />
          </FormControl>
          </>
        )}
      /> 
  </>
  )

}


const InvertoryForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="Product Name"
        render={({ field }) => (
        <>
          <label className='pb-2'>Product Name</label>
          <TextField
            id="Product-name"
            variant="outlined"
            placeholder="Enter your product name"
            fullWidth
            margin="normal"
            {...field}
          />
        </>
        )}
      /> 

      <Controller
        control={control}
        name="Product desc"
        render={({ field }) => (
        <>
        <FormControl fullWidth sx={{mt:2, mb:2}}>
          <label className='mt-1'>Product Description</label>
          <TextField
            id="Product-desc"
            variant="outlined"
            placeholder="Enter your product description"
            margin="normal"
            {...field}
          />
        </FormControl>
        </>
        )}
      /> 

      <Controller
        control={control}
        name="Upload file"
        render={({ field }) => (
        <>
        <FormControl fullWidth>
          <label className='mt-1'>Image URL</label>
          <TextField
            id="Product-desc"
            variant="outlined"
            placeholder="Upload an image"
            fullWidth
            margin="normal"
            {...field}
          />
        </FormControl>
        </>
        )}
      /> 

      <Controller
        control={control}
        name="Qty"
        render={({ field }) => (
        <>
        <FormControl fullWidth>
          <label className='mt-1'>Quantity</label>
          <TextField
            type="number"
            id="Product-desc"
            variant="outlined"
            placeholder="Quantity"
            margin="normal"
            {...field}
          />
        </FormControl>
        </>
        )}
      /> 
  </>
  )
} 

const MiscDetails = () => {
  const { control } = useFormContext();

 return (
   <Controller
     control={control}
     name="Business slogan"
     render={({ field }) => (
       <TextField
         id="business-slogan"
         label="Business slogan"
         variant="outlined"
         placeholder="Enter your business slogan"
         fullWidth
         margin="normal"
         {...field}
       />
     )}
   /> 
 )

}

const renderStep = (step) => {

    switch(step){
        case 0:
              return <BussinessDetails />
        case 1:
          return <InvertoryForm />

        case 2:
            return <MiscDetails />
        default: <>
          <div className="flex font-lg justify-center">
            There was an error🛠
          </div>
        </>
    }
}

const CreateStore = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const data = useForm({
        defaultValues:{
          bussinessName:"",
          bussinessCategory: "",
          productName:"",
          productDescription: "",
          productImg:"",
          bussinessSlogan: "",
          quantity:""

        }
    })
    
    const handleNext = (data) => {
      console.log(data);
      if (activeStep == steps.length - 1) {
        fetch("https://jsonplaceholder.typicode.com/comments")
          .then((data) => data.json())
          .then((res) => {
            console.log(res);
            setActiveStep(activeStep + 1);
          });
      } else {
        setActiveStep(activeStep + 1);
    
      }
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };

  return (
    <>
    <div className='mx-auto w-[60vw] my-7'>
    <h3 className="text-gray-700 text-lg font-semibold text-center font-inter mb-7">
        Create your personalized digital store in less than 30 seconds.🚀
    </h3>
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <h3 className=" mt-20 mb-1 flex justify-center font-inter text-2xl font-semibold text-gray-700">
              All steps completed - you&apos;re finished 🎉🎉
            </h3>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{mt:2}}>
                <FormProvider {...data} >
                  <div className='w-[80%] mx-auto mb-7'>
                      <form onSubmit={data.handleSubmit(handleNext)}>
                          {renderStep(activeStep)}
                      </form>
                  </div>
                </FormProvider>
            </Box>
   
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
            <Box sx={{ flex: '1 1 auto' }} />
              
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button className="bg-gradient-to-r from-red-500 to-red-400 p-10" variant="contained" onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Next Step'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
    </div>
    </>
  );
}

export default CreateStore;
