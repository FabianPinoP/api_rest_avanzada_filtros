const prepareHateoas = async (entity, data) => {
  const results = data
    .map((v) => {
      return {
        name: v.nombre,
        href: `/${entity}/${v.id}`,
      };
    })
    .slice(0, 4);
  const total = data.length;
  const HATEOAS = {
    total,
    results,
  };
  return HATEOAS;
};


export default prepareHateoas;