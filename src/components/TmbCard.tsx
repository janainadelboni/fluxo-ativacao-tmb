import type { TmbStatus } from '../App'

const statusLabels: Record<TmbStatus, string> = {
  'nao-configurado': 'Nao configurado',
  'em-preenchimento': 'Em preenchimento',
  'aguardando': 'Aguardando TMB',
  'aprovado': 'Ativando',
  'ativo': 'Ativo',
  'erro': 'Erro no cadastro',
}

export function TmbCard({ status }: { status: TmbStatus }) {
  return (
    <div className="tmb-card">
      <div className="tmb-logo">TMB</div>
      <div className="tmb-info">
        <div className="tmb-info-top">
          <h4>TMB</h4>
          <span className="badge badge-partner">Parceiro</span>
          <span className={`badge badge-status-${status}`}>{statusLabels[status]}</span>
        </div>
        <p className="tmb-desc">
          Parcelamento via boleto com analise de credito — produtos acima de R$1.000
        </p>
      </div>
    </div>
  )
}
