import type { Cadastro360Status } from '../../App'

interface Props {
  onIniciar: () => void
  cadastro360Status: Cadastro360Status
}

export function TmbNaoConfigurado({ onIniciar, cadastro360Status }: Props) {
  const cadastro360Pendente = cadastro360Status === 'pendente'

  return (
    <div className="estado-panel">
      <p className="estado-intro">
        Ofereça parcelamento via boleto com aprovação de crédito pela TMB.
        O comprador paga em parcelas mensais sem precisar de cartão de crédito.
      </p>

      {cadastro360Pendente && (
        <div className="cadastro360-callout cadastro360-callout--warning">
          <div className="cadastro360-callout-icon" aria-hidden>!</div>
          <div className="cadastro360-callout-body">
            <div className="cadastro360-callout-title">Antes de ativar a TMB, complete o Cadastro 360</div>
            <p className="cadastro360-callout-text">
              O Cadastro 360 valida os dados do produtor — incluindo nome, CPF e biometria
              do representante legal. Esses dados são reaproveitados aqui para agilizar a ativação.
            </p>
          </div>
        </div>
      )}

      <div className="step">
        <div className={`step-circle ${cadastro360Pendente ? 'step-circle-waiting' : 'step-circle-done'}`}>
          {cadastro360Pendente ? '!' : '✓'}
        </div>
        <div>
          <div className="step-title">Completar o Cadastro 360 do produtor</div>
          <div className="step-desc">
            {cadastro360Pendente
              ? 'Pendente. Necessário para validar nome, CPF e biometria do representante legal.'
              : 'Concluído. Os dados do representante legal serão reaproveitados.'}
          </div>
        </div>
      </div>

      <div className="step">
        <div className="step-circle step-circle-pending">1</div>
        <div>
          <div className="step-title">Conferir os dados do representante legal</div>
          <div className="step-desc">
            {cadastro360Pendente
              ? 'Após o Cadastro 360, os dados virão pré-preenchidos. Você só precisa conferir e aceitar o contrato.'
              : 'Os dados virão do Cadastro 360. Você pode editá-los antes de enviar para a TMB.'}
          </div>
        </div>
      </div>

      <div className="step">
        <div className="step-circle step-circle-pending">2</div>
        <div>
          <div className="step-title">Análise de crédito pela TMB</div>
          <div className="step-desc">A TMB é responsável pela análise de crédito e pela aprovação do cadastro. A Eduzz não participa dessa decisão.</div>
        </div>
      </div>

      <div className="step">
        <div className="step-circle step-circle-pending">3</div>
        <div>
          <div className="step-title">Aprovação e ativação</div>
          <div className="step-desc">Após aprovação da TMB, o boleto parcelado é habilitado automaticamente neste produto.</div>
        </div>
      </div>

      <p className="estado-hint">
        Esse processo acontece apenas uma vez. Após a ativação, você poderá habilitar em qualquer produto elegível.
      </p>

      <div className="btn-row">
        {cadastro360Pendente ? (
          <button className="btn btn-primary" onClick={() => alert('Direciona o produtor para o Cadastro 360')}>
            Ir para o Cadastro 360
          </button>
        ) : (
          <button className="btn btn-primary" onClick={onIniciar}>Iniciar cadastro</button>
        )}
      </div>
    </div>
  )
}
