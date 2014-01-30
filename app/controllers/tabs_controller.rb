class TabsController < ApplicationController
	 
	def tab
		
		@query = params[:q] 
		@qtype = params[:qtype]

		if(params.has_key?(:q))
	 		@tabs = Tab.find_by_sql("Select * from gp where #{@qtype} like '%#{@query}%' ORDER BY artist, title")
	 		
		end

	end

	def show
		@query = params[:q]
		@tabs = Tab.find_by_sql("Select * from gp where #{@qtype} like = '#{@query}' ORDER BY artist, title")


	end

	
end
