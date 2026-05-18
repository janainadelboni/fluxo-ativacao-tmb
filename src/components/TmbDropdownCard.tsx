import { useState } from 'react'
import type { TmbStatus, Cadastro360Status, Cadastro360Data } from '../App'
import { TmbNaoConfigurado } from './estados/TmbNaoConfigurado'
import { TmbEmPreenchimento } from './estados/TmbEmPreenchimento'
import { TmbAguardando } from './estados/TmbAguardando'
import { TmbAtivo } from './estados/TmbAtivo'
import { TmbErro } from './estados/TmbErro'

const statusLabels: Record<TmbStatus, string> = {
  'nao-configurado': 'Não configurado',
  'em-preenchimento': 'Em preenchimento',
  'aguardando': 'Aguardando TMB',
  'ativo': 'Ativo',
  'erro': 'Erro no cadastro',
}

interface Props {
  status: TmbStatus
  setStatus: (s: TmbStatus) => void
  showCheckout: boolean
  onToggleCheckout: () => void
  cadastro360Status: Cadastro360Status
  cadastro360Data: Cadastro360Data
}

export function TmbDropdownCard({ status, setStatus, showCheckout, onToggleCheckout, cadastro360Status, cadastro360Data }: Props) {
  const [open, setOpen] = useState(false)

  const isAtivo = status === 'ativo'

  const renderEstado = () => {
    switch (status) {
      case 'nao-configurado':
        return (
          <TmbNaoConfigurado
            onIniciar={() => setStatus('em-preenchimento')}
            cadastro360Status={cadastro360Status}
          />
        )
      case 'em-preenchimento':
        return (
          <TmbEmPreenchimento
            onCancelar={() => setStatus('nao-configurado')}
            onConfirmar={() => setStatus('ativo')}
            onDemorou={() => setStatus('aguardando')}
            cadastro360Status={cadastro360Status}
            cadastro360Data={cadastro360Data}
          />
        )
      case 'aguardando':
        return (
          <TmbAguardando
            onAprovado={() => setStatus('ativo')}
            onErro={() => setStatus('erro')}
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
                Parcelamento via boleto com análise de crédito pela TMB
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
