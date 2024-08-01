// build hierarchy of data to pass through to our chart node
const useBuildChart = (data) => {
  const topLevel = data.find(
    (employee) => employee.position.toLowerCase() === "ceo"
  );

  if (!topLevel) {
    return null;
  }

  const secondLevel = data.filter(
    (employee) =>
      employee.position.toLowerCase().includes("manager") ||
      employee.position.toLowerCase().includes("director")
  );

  const thirdLevel = data.filter(
    (employee) =>
      !employee.position.toLowerCase().includes("manager") &&
      !employee.position.toLowerCase().includes("ceo")
  );

  return {
    ...topLevel,
    name: `${topLevel.firstName} ${topLevel.lastName}`,
    children: secondLevel.map((manager) => ({
      ...manager,
      name: `${manager.firstName} ${manager.lastName}`,
      children: thirdLevel.map((employee) => ({
        ...employee,
        name: `${employee.firstName} ${employee.lastName}`,
      })),
    })),
  };
};

export default useBuildChart;
