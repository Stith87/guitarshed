class TabsController < ApplicationController
	 
	def tab
		
		if(params.has_key?(:q))
			@query =  ActiveRecord::Base.connection.quote("%" + params[:q] + "%")
			@qtype =  params[:qtype]

	 		@tabs = Tab.find_by_sql("Select * from gp where #{@qtype} like #{@query} ORDER BY artist, title")
	 		
		end

	end

	def show
		@query = params[:q]
		@tabs = Tab.find_by_sql("Select * from gp where #{@qtype} like = '#{@query}' ORDER BY artist, title")


	end

	
end
