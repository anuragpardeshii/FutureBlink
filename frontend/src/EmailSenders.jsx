import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";

export default function EmailSenders() {
  return (
    <Tabs
      aria-label="Basic tabs"
      defaultValue={0}
      orientation="vertical"
      size="lg"
    >
      <TabList>
        <Tab variant="plain" color="neutral">
          First tab
        </Tab>
        <Tab variant="plain" color="neutral">
          Second tab
        </Tab>
        <Tab variant="plain" color="neutral">
          {" "}
          Third tab
        </Tab>
      </TabList>
      <TabPanel value={0}>
        <b>First</b> tab panel
      </TabPanel>
      <TabPanel value={1}>
        <b>Second</b> tab panel
      </TabPanel>
      <TabPanel value={2}>
        <b>Third</b> tab panel
      </TabPanel>
    </Tabs>
  );
}
