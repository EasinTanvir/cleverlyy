export const extractPaperIdsByYear = (data, targetYear) => {
  let paperIds = [];

  if (data[targetYear]) {
    // Check if the target year exists in the data
    for (const session in data[targetYear]) {
      for (const variant in data[targetYear][session]) {
        data[targetYear][session][variant].forEach((paper) => {
          if (paper.paper_id && paper.type === "Question Paper") {
            paperIds.push(paper.paper_id);
          }
        });
      }
    }
  }

  return paperIds;
};
