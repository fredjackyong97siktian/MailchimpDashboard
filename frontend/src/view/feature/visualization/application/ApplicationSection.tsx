import React,{useEffect ,useState ,useCallback} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import makeStyle from './Application-style';
import clsx from 'clsx';
import TemplateBox from './../../../../utility/visualization/template/TemplateBox';
import {SortableContainer,SortableElement,SortableHandle} from 'react-sortable-hoc';
import {Scoreline} from './../../../../utility/visualization/scoreline/Scoreline';
import arrayMove from 'array-move';

export const ApplicationSection  :React.FC = () => {

    /*  <Grid item xs={12} sm={6} md={4}  lg={3} >
                    <TemplateBox />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                    <TemplateBox />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                    <TemplateBox />
                    </Grid>
                    <Grid item xs={12} sm={6}md={4} lg={3} >
                    <TemplateBox />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}  lg={3} >
                    <TemplateBox />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                    <TemplateBox />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3} >
                    <TemplateBox />
                    </Grid>
                    <Grid item xs={12} sm={6}md={4} lg={3} >
                    <TemplateBox />
                    </Grid>*/
                    /*                        {
                          id: 2,
                          position:2,
                          component: Scoreline 
                        },
                        {
                          id: 3,
                          position:3,
                          component: Scoreline 
                        },
                        {
                          id: 4,
                          position:4,
                          component: Scoreline 
                        },
                        {
                          id: 5,
                          position:5,
                          component: Scoreline 
                        },
                        {
                          id: 6,
                          position:6,
                          component: Scoreline 
                        },
                        {
                          id: 7,
                          position:7,
                          component: Scoreline 
                        },
                        {
                          id: 8,
                          position:8,
                          component: Scoreline 
                        },
                        {
                          id: 9,
                          position:9,
                          component:Scoreline 
                        },
                        {
                          id: 10,
                          position:10,
                          component: Scoreline 
                        }*/
                    const finalSpaceCharacters = [
                        {
                          id: 1,
                          position:1,
                          component: Scoreline 
                        },

                      ]
    const [listData, setListData] = useState(finalSpaceCharacters);
    const classes = makeStyle();

    const SortableItem = SortableElement(({ value, index }:any) => (
        <Grid item xs={12} sm={6}md={4} lg={3} >
            <TemplateBox item={value.id} />   
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
        let arr = arrayMove(listData, oldIndex, newIndex);
        console.log('onSortEnd')
        for (let i = 0; i < arr.length; i++) {
          arr[i].position = i;
        }
        setListData(arr);
      };
    return(
        <>
        <Grid item xs={12} >               
            <Paper className={clsx(classes.paper,classes.paperPadding)} elevation={0} >
                <SortableList items={listData} onSortEnd={onSortEnd} axis="xy" useDragHandle/>
            </Paper>
        </Grid>
        </>
    )
}
