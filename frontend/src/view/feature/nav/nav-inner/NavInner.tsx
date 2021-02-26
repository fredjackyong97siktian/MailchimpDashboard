import React ,{useState} from 'react';
import useStyles from './NavInner-style';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }

type Orientation = "vertical" | "horizontal"

interface TabInfor {
  label: string,
  component: React.ReactNode;
}

interface TabComponent {
  tabcomponent : Array<TabInfor>
  orientation: Orientation
}
//
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box px={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
    
export const AccountNav: React.FC<TabComponent> = ({tabcomponent,orientation}) =>{
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    handleDrawerClose();
  };

  //tab component
  let index = -1;
  const tab = tabcomponent.map((item)=>{
    index++;
    console.log(index);
    return(
        <Tab className={classes.tab} label={item.label} {...a11yProps(0)} />
    )
  })

  //tab content
  let indexp = -1;
  const tabpanel = tabcomponent.map((item)=>{
    indexp++;
    console.log(indexp);
    return(
      <>
        <TabPanel value={value} index={indexp} >
            <Paper className={classes.paper}>
              {item.component}
            </Paper>
        </TabPanel>
      </>
    )
  })

  //nav detect if it is horizontal or vertical
  const tabItem = (orientation :Orientation) => {
    return(
    <Tabs orientation={orientation}
      classes={{ indicator: classes.indicator }} value={value} onChange={handleChange}  
      variant="scrollable" scrollButtons="auto" className={orientation==='horizontal' ? '' : classes.tabs}>
        {tab}
    </Tabs>  )
  }
  
  //display the nav result
  let tabOrientation;
  let tabOrientationDisplay;
  if(orientation === 'horizontal'){
    tabOrientation =  <AppBar position="static" className={clsx(classes.appbar,classes.tabResSize)} elevation={0} color="default">
                        {tabItem(orientation)}
                      </AppBar>
    tabOrientationDisplay=''
  }else{
    tabOrientation =  <div className={classes.tabResSize}>
                        {tabItem(orientation)}
                      </div>
    tabOrientationDisplay='flex'
  }

    return(
      <>
        <React.Fragment key='left'>
          <Drawer anchor='left' open={open} onClose={handleDrawerClose}  classes={{
              paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}>
            {tabItem('vertical')}
          </Drawer>
        </React.Fragment>
        <div className={classes.grid}>
        <IconButton edge="start"  color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} className={clsx(classes.menuButton)} >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.Title}>
          My Account
        </Typography>

        </div>
        <div className={classes.root} style={{display:tabOrientationDisplay}}>
          
        {tabOrientation}
        {tabpanel}
        </div>
        </>
    )
}