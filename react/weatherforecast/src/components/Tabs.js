import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Carousel1 from "./Carousel1";
import Carousel3 from "./Carousel3";

function TabPanel(props) {

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
                <Box sx={{ p: 5 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs(props) {

    const hourlyData1 = props.hourlyData1;
    const hourlyData2 = props.hourlyData2;
    const hourlyData3 = props.hourlyData3;
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "30%", backgroundColor: "#8CBBF2",marginLeft: "40px", marginBottom:"40px", height: "500px" }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value}
                      onChange={handleChange}

                      variant="fullWidth" // set variant to fullWidth
                      sx={{ width: "500px" }} >
                    <Tab label="Day 1" sx={{backgroundColor: "#E0E4EA"}}{...a11yProps(0)} />
                    <Tab label="Day 2" sx={{backgroundColor: "#E0E4EA"}}{...a11yProps(1)} />
                    <Tab label="Day 3" sx={{backgroundColor: "#E0E4EA"}}{...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} sx = {{height: "500px"}} >
               <Carousel1 hourlyData={hourlyData1} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Carousel1 hourlyData={hourlyData2} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Carousel3 hourlyData={hourlyData3} />
            </TabPanel>
        </Box>
    );
}


