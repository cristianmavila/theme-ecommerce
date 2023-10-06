import React from "react";
import { SectionColumns } from "@/components/Drupal/SectionColumns";
import RichText from "@/components/atoms/RichText/RichText";
import { cn } from "@/lib/tailwind";
import { Section } from "@/types";

const sectionTypes: any = {
  "paragraph--rich_text_area": RichText,
};

interface SectionProps {
  id: string;
  type: string;
  region?: string;
  parentId?: string;
  childComponents?: SectionProps[];
  layout: string; // Define the layout property based on your actual usage
}

interface SectionsProps {
  sections: Section[];
  className?: string;
  regionClassName?: string;
}
export function Sections({
  sections,
  className,
  regionClassName,
}: SectionsProps) {
  if (!sections?.length) {
    return null;
  }

  // Convert the flat section array
  const hierarchy = createSectionHierarchy(sections as SectionProps[]);

  const renderComponent: any = (component: SectionProps) => {
    if (component.type === "paragraph-section") {

      // Group items based on region value
      const groupedChildren =component?.childComponents ? groupChildBasedOnRegion(
        component?.childComponents
      ) : {};
      return (
        <SectionColumns section={component} className={className}>
          {Object.entries(groupedChildren).map(([region, children]: any) => {
            // All items under default should render at same order
            if (region === "default") {
              {
                return children.map((childComponent: any, key: number) => (
                  <React.Fragment key={key}>
                    {renderComponent(childComponent)}
                  </React.Fragment>
                ));
              }
            }

            // Items grouped under other regions should have a parent div to group them
            return (
              <div className={cn(region, regionClassName)} key={region}>
                {children.map((childComponent: any, key: number) => (
                  <React.Fragment key={key}>
                    {renderComponent(childComponent)}
                  </React.Fragment>
                ))}
              </div>
            );
          })}
        </SectionColumns>
      );
    } else {
      // Render component based on the statically typed sectionTypes components
      const Component = sectionTypes[component?.type];
      if (!Component) {
        return null;
      }

      return (
        <div>
          <Component key={component.id} {...component} />
        </div>
      );
    }
  };

  return (
    <>
      {hierarchy.map((component: SectionProps, key: number) => (
        <React.Fragment key={key}>{renderComponent(component)}</React.Fragment>
      ))}
    </>
  );
}

function groupChildBasedOnRegion(children: SectionProps[]) {
  const groupedChildren: any = {};
  children.forEach((childComponent: any) => {
    const region = childComponent?.region || "default"; // Use "default" if region prop is not provided
    if (!groupedChildren[region]) {
      groupedChildren[region] = [];
    }
    groupedChildren[region].push(childComponent);
  });

  return groupedChildren;
}

function createSectionHierarchy(sections: SectionProps[]): SectionProps[] {
  const sectionMap: Record<string, SectionProps[]> = {};
  const rootSections: SectionProps[] = [];

  sections.forEach((section) => {
    if (!section.parentId) {
      rootSections.push(section);
    } else {
      if (!sectionMap[section.parentId]) {
        sectionMap[section.parentId] = [];
      }
      sectionMap[section.parentId].push(section);
    }
  });

  const populateChildren = (section: SectionProps) => {
    section.childComponents = sectionMap[section.id] || [];
    section.childComponents.forEach((child) => populateChildren(child));
  };

  rootSections.forEach((rootSection) => {
    populateChildren(rootSection);
  });

  return rootSections;
}
