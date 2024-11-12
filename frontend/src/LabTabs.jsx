import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Flowmain from './Flowmain';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import EmailSenders from './EmailSenders';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Sequence" value="1" />
            <Tab label="Email Senders" value="2" />
            <Tab label="Tasks" value="3" />
            <Tab label="Reports" value="4" />
            <Tab label="Template" value="5" />
          </TabList>
        </Box>
        {/* Flowmain component will be shown in the first tab */}
        <TabPanel value="1"><Flowmain/></TabPanel>
        <TabPanel value="2"><EmailSenders/></TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        <TabPanel value="4">Item Four</TabPanel>
        <TabPanel value="5">Item Five</TabPanel>
      </TabContext>
    </Box>
  );
}
