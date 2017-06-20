package maze.controller.servlet;

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
 * Servlet implementation class SettingNameServlet
 */
@WebServlet("/SettingNameServlet")
public class SettingNameServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SettingNameServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		//�o��n�}�l�]�w�W�r�A�p�G���\�N�i�J�ж��C��A�S���\�N���^�i�J����
		request.setCharacterEncoding("utf-8");
		String userName= request.getParameter("userName");
		System.out.println("�w��"+userName+"�}�l�Z���k�X���R�}");
		response.setCharacterEncoding("utf-8");
		
		//�o��n��W�r�s��session���A���ۤv���q��Ū����ۤv���W�r
		HttpSession session = request.getSession();
		session.setAttribute("userName", userName);
		
		response.setContentType("text/html");
		response.setCharacterEncoding("UTF-8");
		response.getWriter().write("<meta http-equiv='refresh' content='0;url=roomlist.html' />");
	
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
