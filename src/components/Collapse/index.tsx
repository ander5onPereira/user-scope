import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { CollapseWrapper, Content, Header, Inner } from './style';

interface CollapseProps {
  title: string;
  children: React.ReactNode;
  onOpenChange?: (isOpen: boolean) => void;
}

export function Collapse({ title, children, onOpenChange }: CollapseProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onOpenChange?.(newState);
  };
  return (
    <CollapseWrapper>
      <Header onClick={handleToggle}>
        <h4>{title}</h4>
        <span aria-expanded={isOpen}>
          {isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </span>
      </Header>

      <AnimatePresence initial={false}>
        {isOpen && (
          <Content
            as={motion.div}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <Inner>{children}</Inner>
          </Content>
        )}
      </AnimatePresence>
    </CollapseWrapper>
  );
}
