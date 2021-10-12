import React, { useState } from 'react';
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CellLumino, CellControl } from '@datalayer/jupyter-widgets';
import { CommandsLumino, CommandsControl } from '@datalayer/jupyter-widgets';
import { ConsoleLumino, ConsoleControl } from '@datalayer/jupyter-widgets';
import { DialogLumino, DialogControl } from '@datalayer/jupyter-widgets';
import { FileBrowserLumino, FileBrowserControl } from '@datalayer/jupyter-widgets';
import { NotebookLumino, NotebookControl } from '@datalayer/jupyter-widgets';
import { Kernel } from '@datalayer/jupyter-widgets';
import { OutputLumino, OutputControl } from '@datalayer/jupyter-widgets';
import { SettingsLumino, SettingsControl } from '@datalayer/jupyter-widgets';
import { TerminalLumino, TerminalControl } from '@datalayer/jupyter-widgets';
// import { JupyterAdmin } from '@datalayer/jupyter-admin';

/**
 * The source code to be shown in the examples.
 */
const code = `from IPython.display import display
for i in range(3):
     display('😃 String {} added to the DOM in separated DIV.'.format(i))

import numpy as np
import matplotlib.pyplot as plt
x1 = np.linspace(0.0, 5.0)
x2 = np.linspace(0.0, 2.0)
y1 = np.cos(2 * np.pi * x1) * np.exp(-x1)
y2 = np.cos(2 * np.pi * x2)
fig, (ax1, ax2) = plt.subplots(2, 1)
fig.suptitle('A tale of 2 subplots')
ax1.plot(x1, y1, 'o-')
ax1.set_ylabel('Damped oscillation')
ax2.plot(x2, y2, '.-')
ax2.set_xlabel('time (s)')
ax2.set_ylabel('Undamped')
plt.show()`;
 
 interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function tabsProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 1200,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const Gallery = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [kernel, _] = useState(new Kernel())
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Admin" {...tabsProps(0)} />
        <Tab label="Cell" {...tabsProps(1)} />
        <Tab label="Commands" {...tabsProps(2)} />
        <Tab label="Console" {...tabsProps(3)} />
        <Tab label="Dialog" {...tabsProps(4)} />
        <Tab label="File Browser" {...tabsProps(5)} />
        <Tab label="Notebook" {...tabsProps(6)} />
        <Tab label="Outputs" {...tabsProps(7)} />
        <Tab label="Settings" {...tabsProps(8)} />
        <Tab label="Terminal" {...tabsProps(9)} />
      </Tabs>
      <div style={{ width: '100vh' }}>
        <TabPanel value={value} index={0}>
{/*          
          <JupyterAdmin />
*/}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CellControl />
          <CellLumino source={code} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CommandsControl />
          <CommandsLumino />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ConsoleControl />
          <ConsoleLumino />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <DialogControl/>
          <DialogLumino />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <FileBrowserControl />
          <FileBrowserLumino />
        </TabPanel>
        <TabPanel value={value} index={6}>
          <NotebookControl />
          <NotebookLumino path='ping.ipynb' ipywidgets="modern" />
        </TabPanel>
        <TabPanel value={value} index={7}>
          <OutputControl />
          <OutputLumino showEditor={true} autoRun={false} kernel={kernel} code={"print('Hello Datalayer 👍')"}/>
          <OutputLumino showEditor={true} autoRun={true} kernel={kernel} code={code}/>
        </TabPanel>
        <TabPanel value={value} index={8}>
          <SettingsControl />
          <SettingsLumino />
        </TabPanel>
        <TabPanel value={value} index={9}>
          <TerminalControl />
          <TerminalLumino />
        </TabPanel>
      </div>
    </div>
  );
}

export default Gallery;
