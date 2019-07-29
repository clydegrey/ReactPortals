import React from "react";
import DetailsSummary from "../DetailsSummary";
import FormCheckBox from "../DynamicForm/elements/FormCheckBox";

const FilterGroups = ({ filters, checkHandler, activeFilters }) => {
  return filters.map(({ FilterCodeName, FilterDisplayName, FilterItems }) => {
    return (
      <DetailsSummary
        border={true}
        padding={true}
        key={FilterCodeName}
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
    );
  });
};

export default FilterGroups;
