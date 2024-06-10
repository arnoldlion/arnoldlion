/**
 * @typedef {import("@prismicio/client").Content.CatInfoSlice} CatInfoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CatInfoSlice>} CatInfoProps
 * @param {CatInfoProps}
 */
const CatInfo = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for cat_info (variation: {slice.variation}) Slices
    </section>
  );
};

export default CatInfo;
