
$(function () {

   $("#Data").on("change", function () {

      var d = this.value.split("-");
      var data = new Date(d[0], d[1] - 1, d[2]).getDay();
      var dia_semana = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'][data];
      $("#dias").val(dia_semana);

   }).change();

});
<label htmlFor="dias">Dia:</label>
              <input class="form-control"
                type="date"
                name="dias"
                id="dias"

                onChange={(e) => setDia(e.target.value)}
                value={dia || ""}
              />
