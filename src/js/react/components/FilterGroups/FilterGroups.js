import React from "react";
import DetailsSummary from "../DetailsSummary";
import FormCheckBox from "../DynamicForm/elements/FormCheckBox";

const FilterGroups = ({ filters, checkHandler, activeFilters }) => {
  return filters.map(({ FilterCodeName, FilterDisplayName, FilterItems }) => {
    return (
      <div style={{ marginBottom: "5px" }} key={FilterCodeName}>
        <DetailsSummary
          border={true}
          padding={true}
          background={true}
          summary={FilterDisplayName}
        >
          <FormCheckBox
            fieldCodeName={FilterCodeName}
            onChangeHandler={checkHandler}
            options={FilterItems}
            legend={FilterDisplayName}
            value={activeFilters[FilterCodeName]}
          />
        </DetailsSummary>
      </div>
    );
  });
};

export default FilterGroups;
