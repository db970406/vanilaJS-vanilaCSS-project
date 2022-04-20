
export const deleteEmployeeData = async (id, employeeName) => {
    const selectDetailMode = document.getElementById("backdrop");
    const avatars = document.querySelectorAll("#avatar_img");

    const responseData = await fetch(`http://localhost:4000/employee/delete`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({ id })
    });

    if (responseData.status === 200) {
        avatars.forEach(avatar => {
            if (avatar.dataset.id === String(id)) {
                avatar.parentNode.remove();
            }
            selectDetailMode.remove();
        });
        alert(`${employeeName}님의 정보가 삭제되었습니다.`);
    }
};