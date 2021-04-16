import React,{useEffect ,useState ,useCallback} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyle from './Dashboard-style';
import clsx from 'clsx';
import TemplateBox from './../../../../utility/visualization/template/TemplateBox';
import {SortableContainer,SortableElement,SortableHandle} from 'react-sortable-hoc';
import {Scoreline} from './../../../../utility/visualization/scoreline/Scoreline';
import arrayMove from 'array-move';
import {DashboardI,VPI} from './Dashboard';

interface nVPI extends VPI {
  position:number
}

interface dataSectionI {
  listDataProps: Array<nVPI>,
  onSetListData : (arr:any)=>void,
  position: Array<number>,
  onSetPosition: (arr:any)=>void,
}

export const DashboardSection  :React.FC<dataSectionI> = ({listDataProps,onSetListData,position,onSetPosition}) => {
  const classes = makeStyle();              

    const SortableItem = SortableElement(({ value, index }:any) => (
        <Grid item xs={12} sm={6}md={4} lg={3} >
            <TemplateBox item={value} key={value.id} />   
        </Grid>
      ));
    
      const SortableList = SortableContainer(({ items }:any) => {
        return (
        <Grid container direction="row" justify="flex-start" alignItems="flex-start">
            {items
              .sort((a:any, b:any) => a.position - b.position)
              .map((value:any, index:any) => (
                <SortableItem value={value} index={index} key={value.id} />
              ))}
          </Grid>
        );
      });
    
      const onSortEnd = ({ oldIndex, newIndex }:any) => {
        let arr = arrayMove(listDataProps, oldIndex, newIndex);
        console.log('onSortEnd')
        for (let i = 0; i < arr.length; i++) {
          arr[i].position = i;;
        }
        onSetListData(arr);
        onSetPosition(arrayMove(position, oldIndex, newIndex));
      };
      //
    return(
        <>
        <Grid item xs={12} >               
            <Paper className={clsx(classes.paper,classes.paperPadding)} elevation={0} >
              <SortableList items={listDataProps} onSortEnd={onSortEnd} axis="xy" useDragHandle/>
            </Paper>
        </Grid>
        </>
    )
}
