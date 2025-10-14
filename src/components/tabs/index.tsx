import React, { useEffect, useState } from 'react';
import { TabButton, TabContent, TabList, TabsContainer } from './styles';

interface Tab {
  id: string;
  label: string;
  content: () => React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultActive?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultActive }) => {
  const [activeTab, setActiveTab] = useState(defaultActive ?? tabs[0].id);
  const [loadedTabs, setLoadedTabs] = useState<Set<string>>(new Set());

  useEffect(() => {
    setLoadedTabs((prev) => new Set(prev).add(activeTab));
  }, [activeTab]);

  return (
    <TabsContainer>
      <TabList>
        {tabs.map((tab) => (
          <TabButton
            key={tab.id}
            $active={tab.id === activeTab}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabList>

      {tabs.map((tab) => {
        if (!loadedTabs.has(tab.id)) return null;
        return (
          <TabContent
            key={tab.id}
            style={{ display: tab.id === activeTab ? 'block' : 'none' }}
          >
            {tab.content()}
          </TabContent>
        );
      })}
    </TabsContainer>
  );
};
