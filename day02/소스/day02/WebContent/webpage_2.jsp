<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true" %>

<%
	String[] list = {"PHP", "JSP", "ASP"};
%>
<!doctype html>
<html>
<head>
	<meta charset="utf-8" />
	<title>My JSP Page</title>
	<!-- Twitter Bootstrap3 & jQuery -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" />
	<script src="http://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="container">
		<h1>Hello JSP</h1>
		
		<ul>
			<%
				for(int i = 0; i<list.length; i++){
					out.print("<li>" + list[i] + "</li>");
				}
			%>
		
		</ul>
		<hr/>
		<ul>
			<% for(int i = 0; i<list.length; i++){ %>
				<li> <%=list[i]%>	</li>
			<% } %>
		</ul>
		
		
		
	</div>
</body>
</html>










