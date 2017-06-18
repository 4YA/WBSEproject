package maze.controller.servlet;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import maze.ready.GameRoom;

/**
 * Servlet implementation class EnterRoomServlet
 */
@WebServlet("/EnterRoomServlet")
public class EnterRoomServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public EnterRoomServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		int roomID = Integer.parseInt(request.getParameter("roomID"));
		System.out.println("���H�i�J�ж�"+roomID);
		response.setCharacterEncoding("utf-8");
		ArrayList<GameRoom> tmpGameRoom = (ArrayList<GameRoom>)getServletContext().getAttribute("roomList");
		for(GameRoom tmp:tmpGameRoom)
		{
			if(tmp.getRoomNumber() == roomID)
			{
				tmp.setRoomPeople(tmp.getRoomPeople()+1);
			}
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
