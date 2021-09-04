import React from 'react';

export default function Header ( {onSwitchList, onSwitchGrid, isListView, onRefresh} ) {
    return (
        <div className='card-panel red lighten-2 col s12'>
            <div className='row valign-wrapper'>
                <div className='col s6'>
                <h1 className='white-text left-align medium'>React users</h1>
                </div>
                <div className='col s6'>
                <i className='material-icons right white-text waves-effect' onClick={onRefresh}>autorenew</i>
                    {
                        isListView
                        ?  <i className='material-icons right white-text waves-effect' onClick={onSwitchList}>apps</i>
                        :  <i className='material-icons right white-text waves-effect' onClick={onSwitchGrid}>dehaze</i>
                    }               
                </div>
            </div>
        </div>
    )
};

