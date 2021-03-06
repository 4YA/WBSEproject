﻿package maze.controller.servlet;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import maze.ready.GameRoom;

/**
 * Servlet implementation class GameStatus
 */
@WebServlet("/GameStatusServlet")
public class GameStatusServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GameStatusServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		
		int roomID = Integer.parseInt(request.getParameter("roomID"));
		
		ArrayList<GameRoom> tmpGameRoom = (ArrayList<GameRoom>)getServletContext().getAttribute("roomList");
		for(GameRoom tmp:tmpGameRoom)
		{
			if(tmp.getRoomNumber() == roomID)
			{
				if(tmp.getGameStatus() == 1)
				{
					response.getWriter().write('1');
				}
				else
				{
					response.getWriter().write('0');
				}
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
