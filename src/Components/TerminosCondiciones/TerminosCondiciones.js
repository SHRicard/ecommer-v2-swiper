import React from "react";
import "./TerminosCondiciones.css";
const TerminosCondiciones = () => {
  return (
    <div>
      <div className="col-12 bg-warning text-center  pb-3">
        <small className="  text-Anton text-black fs-6">
          Pregunta Frecuente
        </small>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed  text-Anton text-black fs-6"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Los productos
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body  ">
                <small className="text-Anton text-muted">
                  ¿Los productos son originales?
                </small>
                <small className="text-Anton text-black">
                  <br />
                  No ,los productos son réplicas importadas de excelente cálida
                  cuenta con capellá reforzada en algunos casos son originales.
                  Para verificar si el producto elegido es original o replicada,
                  puede ingresar al detalle del producto y verificar la
                  procedencia de dicho producto. Corregido con
                </small>
                <br />
                <br />
                <small className="text-Anton text-muted">
                  ¿Existe stock de todos los productos publicados?
                </small>

                <small className="text-Anton text-black">
                  <br />
                  Si el producto está publicado en el sitio, es porque existe
                  disponibilidad para la entrega. Pero muchas personas pueden
                  estar comprando en el mismo momento que vos, en especial
                  cuando tenemos eventos comerciales u ofertas de últimos
                  talles. En ese caso, si no hubiera suficiente stock para la
                  entrega del producto que adquiriste, por la cantidad de
                  compras simultáneas, vamos a realizar la devolución del monto
                  pagado por el producto sin stock, al mismo medio de pago
                  utilizado para la compra. Puede suceder que si compraste
                  muchos productos y no podemos entregar la totalidad de tu
                  pedido, lo despacharemos con los productos disponibles y te
                  reembolsaremos el valor por los ítems indisponibles al mismo
                  medio de pago. Tené en cuenta que como realizamos reposición
                  constante de productos, el artículo que hayas seleccionado
                  podría volver a tener stock a la brevedad.
                </small>
                <br />
                <br />
                <small className="text-Anton text-muted">
                  Se puede solicitar un art que no se encontrado en la tienda
                  online?
                </small>
                <small className="text-Anton text-black">
                  <br />
                  No, Ya que Running Deporte solo trabaja con stock en el
                  momento, no realiza pedidos puntuales
                </small>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed  text-Anton text-black fs-6"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Cuáles son las forma de pago disponibles y envios?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body text-Anton text-muted">
                <small className="text-Anton text-muted">Pago Digital</small>
                <br />
                <small className="text-Anton text-black">
                  Aceptamos todo tiṕo de pago digital. trasferencia, envio de
                  dinero , ect
                </small>
                <br />
                <br />
                <small className="text-Anton text-muted">Envios</small>
                <br />
                <small className="text-Anton text-black">
                  Los envió son realizados atrás vez de Andreani, el costo del
                  envió lo cotiza la empresa Andreani Running Deporte no tiene
                  protestad por dicho monto.El monto sera abonado por el
                  comprador
                </small>
                <br />
                <br />
                <small className="text-Anton text-muted">
                  Envios a Domicilio
                </small>
                <br />
                <small className="text-Anton text-black">
                  Los envió a domicilio son efectuados por un personal de la
                  empresa, el costo del envió es cotizado en el momento de la
                  compra y el envió del producto es realizado después de abecé
                  afectado el pago de dicho producto o envió los comprobantes de
                  dicho pago
                </small>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed text-Anton text-black fs-6"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Reembolsos
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body text-Anton text-muted">
                <small className="text-Anton text-muted">
                  Cambio por Falla o por Talle
                </small>
                <small className="text-Anton text-black">
                  <br />
                  Los Cambios solo se aceptarán por fallas del producto , los
                  Cambios por talles solo se realizaran cuando se apruebe el
                  control de calidad , en el caso que no allá stock del mismo
                  producto en otro talle tendrá la opc de cambiar de producto o
                  la devolución del dinero
                </small>
                <br />
                <br />
                <small className="text-Anton text-muted">
                  Reembolsos por arrepentimiento
                </small>
                <br />
                <small className="text-Anton text-black">
                  Los reembolsos se efectuarán acorde a la forma de pago que
                  utilizaste. Una vez que la cancelación de tu pedido ha sido
                  procesada, o bien, cuando la devolución de tu producto apruebe
                  el control de calidad, recibirás de forma automática el
                  reembolso de tu dinero, recordá que los tiempos en ver
                  reflejado tu dinero en cuenta o tarjeta variarán dependiendo
                  del método de Pago. Tiempo de reembolsos por arrepentimiento
                  es de 7 días pasado este plazo ya no será aceptado
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminosCondiciones;
