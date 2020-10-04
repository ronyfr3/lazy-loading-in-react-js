import React from 'react'
import './Loader.css'
import { css } from "@emotion/core";
import {PulseLoader} from 'react-spinners'

const styleCss = css`
  display: block;
  padding-left: 5px;
  border-color: red;
  padding-top: 5px;
  padding-bottom: 5px;
`;
function LoadingIndicator() {

    return (
       
            <div className='loader'>
                  <span className='text'>Loading</span>
                  <PulseLoader 
                  css={styleCss}
                  color={'gray'}
                  size={3}
                  loading/>
            </div>
    )
}

export default LoadingIndicator
