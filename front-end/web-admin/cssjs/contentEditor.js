let WIPPageObject={}


const panelHtml = `<section id="panel-${panelNumber}">
				<label for="panel-${panelNumber}-image">Panel ${panelNumber} Image:</label>
				<input type="text" id="panel-${panelNumber}-image" name="panel-${panelNumber}-image" placeholder="Enter Image URL">
				
				<label for="panel-${panelNumber}-header">Panel ${panelNumber} Header:</label>
				<input type="text" id="panel-${panelNumber}-header" name="panel-${panelNumber}-header" placeholder="Enter Panel ${panelNumber} Header">
				
				<label for="panel-${panelNumber}-desc">Panel ${panelNumber} Description:</label>
				<textarea id="panel-${panelNumber}-desc" name="panel-${panelNumber}-desc" placeholder="Enter Panel ${panelNumber} Description"></textarea>
				<label for="panel-${panelNumber}-enable-btn">Enable/Disable Button:</label>
				<select id="panel-${panelNumber}-enable-btn" name="panel-${panelNumber}-enable-btn">
					<option value="enabled">Enable</option>
					<option value="disabled">Disable</option>
				</select>

				<label for="panel-${panelNumber}-btn-link">Button Link:</label>
				<input type="text" id="panel-${panelNumber}-btn-link" name="panel-${panelNumber}-btn-link" placeholder="Enter Button Link">
				
			</section>`