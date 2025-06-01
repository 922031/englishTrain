import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function MainApp() {
  return (
    <div className='english-container'>
      <div className='header'>
        <div className='header-title'>
          英語トレーニング
        </div>{/*header-title*/}
        <div className='header-subtitle'>
          英単語2000
        </div>{/*header-subtitle*/}
      </div>{/*header*/}
      <div className='body'>
        <div className='button-container'>
          <Button
            className='button-class'
            component={Link}
            to='/EnglishTrain'
            variant='contained'>
            スタート！
          </Button>
          <div>
            <Button
              className='button-class'
              component={Link}
              to='/Mistakes'
              variant='contained'>
              単語リスト
            </Button>
          </div>
        </div>{/*button-container*/}
      </div>{/*body*/}

    </div>
  );

};

export default MainApp;