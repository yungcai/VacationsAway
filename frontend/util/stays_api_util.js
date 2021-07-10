export const fetchStays = () => (
    $.ajax({
      method: "get",
      url: "/api/stays"
    })
);
  
  export const fetchStay = (stayId) => (
    $.ajax({
      method: "get",
      url: `/api/stays/${stayId}`
    })
  );
  
  export const createStay = (stay) => (
    $.ajax({
      type: "post",
      url: "/api/stays",
      data: {stay}
    })
  );

  export const updateStay = (stay) => (
    $.ajax({
      type: "post",
      url: `/api/stays/${stay.id}`,
      data: {stay}
    })
  );

  export const removeStay = (stayId) => (
    $.ajax({
      type: "delete",
      url: `/api/stays/${stayId}`
    })
  );
  