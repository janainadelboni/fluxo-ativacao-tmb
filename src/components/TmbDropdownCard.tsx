import { useState } from 'react'
import type { TmbStatus } from '../App'
import { TmbNaoConfigurado } from './estados/TmbNaoConfigurado'
import { TmbEmPreenchimento } from './estados/TmbEmPreenchimento'
import { TmbAguardando } from './estados/TmbAguardando'
import { TmbAprovado } from './estados/TmbAprovado'
import { TmbAtivo } from './estados/TmbAtivo'
import { TmbErro } from './estados/TmbErro'

const statusLabels: Record<TmbStatus, string> = {
  'nao-configurado': 'Nao configurado',
  'em-preenchimento': 'Em preenchimento',
  'aguardando': 'Aguardando TMB',
  'aprovado': 'Ativando',
  'ativo': 'Ativo',
  'erro': 'Erro no cadastro',
}

interface Props {
  status: TmbStatus
  setStatus: (s: TmbStatus) => void
  showCheckout: boolean
  onToggleCheckout: () => void
}

export function TmbDropdownCard({ status, setStatus, showCheckout, onToggleCheckout }: Props) {
  const [open, setOpen] = useState(false)

  const isAtivo = status === 'ativo'

  const renderEstado = () => {
    switch (status) {
      case 'nao-configurado':
        return <TmbNaoConfigurado onIniciar={() => setStatus('em-preenchimento')} />
      case 'em-preenchimento':
        return (
          <TmbEmPreenchimento
            onCancelar={() => setStatus('nao-configurado')}
            onConfirmar={() => setStatus('ativo')}
            onDemorou={() => setStatus('aguardando')}
          />
        )
      case 'aguardando':
        return (
          <TmbAguardando
            onAprovado={() => setStatus('ativo')}
            onErro={() => setStatus('erro')}
          />
        )
      case 'aprovado':
        return (
          <TmbAprovado
            onAtivo={() => setStatus('ativo')}
          />
        )
      case 'ativo':
        return (
          <TmbAtivo
            showCheckout={showCheckout}
            onToggleCheckout={onToggleCheckout}
            onDesativar={() => setStatus('nao-configurado')}
          />
        )
      case 'erro':
        return (
          <TmbErro
            onCorrigir={() => setStatus('em-preenchimento')}
          />
        )
    }
  }

  return (
    <div className={`tmb-dropdown ${open ? 'tmb-dropdown--open' : ''}`}>
      <div className="tmb-dropdown-header">
        <button className="tmb-dropdown-header-btn" onClick={() => setOpen(v => !v)}>
          <div className="tmb-dropdown-left">
            <div className="tmb-logo">TMB</div>
            <div className="tmb-info">
              <div className="tmb-info-top">
                <h4>TMB</h4>
                <span className="badge badge-partner">Parceiro</span>
                <span className={`badge ${isAtivo && !showCheckout ? 'badge-status-nao-configurado' : `badge-status-${status}`}`}>
                  {isAtivo && !showCheckout ? 'Desativado' : statusLabels[status]}
                </span>
              </div>
              <p className="tmb-desc">
                Parcelamento via boleto com analise de credito pela TMB
              </p>
            </div>
          </div>
        </button>

        <div className="tmb-header-actions">
          {isAtivo && (
            <button
              className={`toggle ${showCheckout ? 'on' : ''}`}
              onClick={e => { e.stopPropagation(); onToggleCheckout() }}
              title={showCheckout ? 'Desativar no checkout' : 'Ativar no checkout'}
            />
          )}
          <button className="tmb-chevron-btn" onClick={() => setOpen(v => !v)}>
            <span className={`tmb-chevron ${open ? 'tmb-chevron--open' : ''}`}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="tmb-dropdown-body">
          {renderEstado()}
        </div>
      )}
    </div>
  )
}
