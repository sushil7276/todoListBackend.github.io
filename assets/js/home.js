$(function () {
    // Create Element Variables
    const ntDescElement = $("#ntDesc");
    const createTaskSubmitElement = $("#createTaskSubmit");
    const deleteTaskSubmitElement = $("#deleteTaskSubmit");

    // If the description input is empty then disable the Add Task button, else enable it
    ntDescElement.on("keyup", () => {
        let searchParam = $.trim(ntDescElement.val());
        if (searchParam == "") {
            createTaskSubmitElement.prop("disabled", true);
        } else {
            createTaskSubmitElement.prop("disabled", false);
        }
    });

    // If no checkbox is checked then disable the Delete Task button, else enable it
    $("#deleteTask input:checkbox").click(() => {
        console.log("Test1")
        if ($("#deleteTask input:checkbox:checked").length > 0) {
            deleteTaskSubmitElement.prop("disabled", false);
        } else {
            deleteTaskSubmitElement.prop("disabled", true);
        }
    });
});
