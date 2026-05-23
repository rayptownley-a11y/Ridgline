<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>Ridgeline — Platform UI</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#f5f4f0;display:flex;align-items:center;justify-content:center;min-height:100vh;padding:20px}
.app{display:flex;height:720px;width:100%;max-width:1000px;border:0.5px solid #e0ddd6;border-radius:12px;overflow:hidden;background:#fff;box-shadow:0 4px 24px rgba(0,0,0,0.08)}
.sidebar{width:200px;flex-shrink:0;border-right:0.5px solid #e0ddd6;background:#f9f8f5;display:flex;flex-direction:column}
.logo{display:flex;align-items:center;gap:8px;padding:16px;border-bottom:0.5px solid #e0ddd6}
.logo-icon{width:28px;height:28px;background:#EA580C;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:16px}
.logo-text{font-weight:600;font-size:14px;color:#1a1a18}
.nav{flex:1;padding:8px}
.nav-item{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:8px;font-size:13px;cursor:pointer;color:#6b6a63;transition:background .15s;user-select:none}
.nav-item:hover{background:#fff}
.nav-item.active{background:#fff;color:#EA580C;font-weight:500}
.sidebar-footer{padding:12px;border-top:0.5px solid #e0ddd6}
.avatar-row{display:flex;align-items:center;gap:8px}
.avatar{width:30px;height:30px;border-radius:50%;background:#FEF3E9;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;color:#EA580C;flex-shrink:0}
.main{flex:1;overflow:hidden;display:flex;flex-direction:column}
.topbar{padding:14px 20px;border-bottom:0.5px solid #e0ddd6;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}
.topbar-title{font-size:15px;font-weight:600;color:#1a1a18}
.topbar-sub{font-size:12px;color:#888780;margin-top:1px}
.btn-primary{background:#EA580C;color:#fff;border:none;border-radius:8px;padding:7px 14px;font-size:12px;font-weight:500;cursor:pointer;display:flex;align-items:center;gap:5px}
.content{flex:1;overflow-y:auto;padding:20px}
.stat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:20px}
.stat{background:#f5f4f0;border-radius:8px;padding:12px 14px}
.stat.accent{background:#FEF3E9;border:0.5px solid #FDBA74}
.stat-label{font-size:11px;color:#888780;margin-bottom:4px}
.stat-val{font-size:20px;font-weight:600;color:#1a1a18}
.stat.accent .stat-val{color:#EA580C}
.section-label{font-size:11px;font-weight:500;color:#888780;text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px}
.athlete-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:20px}
.athlete-card{background:#fff;border:0.5px solid #e0ddd6;border-radius:12px;padding:14px;cursor:pointer;transition:border-color .15s}
.athlete-card:hover{border-color:#FDBA74}
.ac-name{font-size:13px;font-weight:500;color:#1a1a18}
.ac-loc{font-size:11px;color:#888780;margin-top:1px}
.badge{font-size:10px;padding:2px 7px;border-radius:20px;font-weight:500}
.badge-pro{background:#FEF3E9;color:#C2410C}
.badge-elite{background:#FEF9C3;color:#854D0E}
.badge-semi{background:#EFF6FF;color:#1D4ED8}
.sport-tags{display:flex;flex-wrap:wrap;gap:4px;margin:8px 0}
.sport-tag{font-size:10px;background:#f5f4f0;color:#6b6a63;border-radius:4px;padding:2px 6px}
.ac-footer{display:flex;align-items:center;justify-content:space-between}
.ac-followers{font-size:11px;color:#888780}
.ac-open{font-size:10px;color:#16A34A}
.convo-list{width:220px;flex-shrink:0;border-right:0.5px solid #e0ddd6}
.convo-header{padding:14px 16px;border-bottom:0.5px solid #e0ddd6;font-size:14px;font-weight:600;color:#1a1a18}
.convo-item{display:flex;align-items:center;gap:10px;padding:11px 14px;border-bottom:0.5px solid #e0ddd6;cursor:pointer;transition:background .12s}
.convo-item:hover,.convo-item.active{background:#f9f8f5}
.ci-name{font-size:12px;font-weight:500;color:#1a1a18}
.ci-preview{font-size:11px;color:#888780;margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:120px}
.ci-time{font-size:10px;color:#888780;margin-left:auto;flex-shrink:0}
.thread{flex:1;display:flex;flex-direction:column}
.thread-header{padding:12px 16px;border-bottom:0.5px solid #e0ddd6;display:flex;align-items:center;gap:10px}
.messages{flex:1;padding:16px;display:flex;flex-direction:column;gap:10px;overflow-y:auto}
.msg{display:flex;align-items:flex-end;gap:7px;max-width:75%}
.msg.me{align-self:flex-end;flex-direction:row-reverse}
.bubble{padding:8px 12px;border-radius:14px;font-size:12px;line-height:1.5}
.bubble.them{background:#f5f4f0;border-radius:2px 14px 14px 14px;color:#1a1a18}
.bubble.me{background:#EA580C;color:#fff;border-radius:14px 14px 2px 14px}
.msg-time{font-size:10px;color:#888780;margin-top:3px}
.msg-input-row{padding:12px 16px;border-top:0.5px solid #e0ddd6;display:flex;gap:8px;align-items:center}
.msg-input{flex:1;background:#f5f4f0;border:0.5px solid #e0ddd6;border-radius:20px;padding:7px 14px;font-size:12px;color:#1a1a18;outline:none}
.send-btn{width:30px;height:30px;background:#EA580C;border-radius:50%;border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;font-size:14px;color:#fff}
.view{display:none}
.view.active{display:flex;flex-direction:column;flex:1;overflow:hidden}
.view.msgs.active{flex-direction:row}
.profile-wrap{padding:20px;overflow-y:auto;flex:1}
.profile-card{background:#fff;border:0.5px solid #e0ddd6;border-radius:12px;padding:20px;margin-bottom:14px}
.pc-title{font-size:14px;font-weight:600;color:#1a1a18;margin-bottom:14px;padding-bottom:10px;border-bottom:0.5px solid #e0ddd6}
.field-row{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}
.field label{font-size:11px;color:#888780;display:block;margin-bottom:4px}
.field input,.field textarea,.field select{width:100%;background:#f5f4f0;border:0.5px solid #e0ddd6;border-radius:8px;padding:7px 10px;font-size:12px;color:#1a1a18;outline:none;font-family:inherit}
.field textarea{resize:none}
.sport-chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px}
.chip{font-size:11px;padding:4px 10px;border-radius:20px;border:0.5px solid #e0ddd6;cursor:pointer;color:#6b6a63;background:#fff}
.chip.on{background:#FEF3E9;border-color:#FDBA74;color:#C2410C;font-weight:500}
.save-btn{background:#EA580C;color:#fff;border:none;border-radius:8px;padding:9px 18px;font-size:13px;font-weight:500;cursor:pointer;display:flex;align-items:center;gap:6px}
.campaigns-wrap{padding:20px;overflow-y:auto;flex:1}
.campaign-card{background:#fff;border:0.5px solid #e0ddd6;border-radius:12px;padding:16px;margin-bottom:10px}
.cc-title{font-size:13px;font-weight:500;color:#1a1a18}
.cc-brand{font-size:11px;color:#888780;margin-top:2px}
.cc-desc{font-size:12px;color:#888780;line-height:1.5;margin:8px 0}
.cc-budget{font-size:12px;font-weight:500;color:#16A34A}
.tag-open{background:#DCFCE7;color:#166534;font-size:10px;padding:2px 7px;border-radius:20px;font-weight:500}
.tag-draft{background:#f5f4f0;color:#888780;font-size:10px;padding:2px 7px;border-radius:20px}
.brand-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.brand-card{background:#fff;border:0.5px solid #e0ddd6;border-radius:12px;padding:16px;cursor:pointer;transition:border-color .15s}
.brand-card:hover{border-color:#FDBA74;box-shadow:0 2px 12px rgba(0,0,0,0.06)}
.brand-header{display:flex;align-items:flex-start;gap:12px;margin-bottom:12px}
.brand-logo{width:40px;height:40px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0}
.brand-name{font-size:13px;font-weight:600;color:#1a1a18;display:flex;align-items:center;gap:5px}
.verified{font-size:10px;background:#EFF6FF;color:#1D4ED8;padding:1px 6px;border-radius:10px;font-weight:500}
.brand-industry{font-size:11px;color:#888780;margin-top:2px}
.brand-desc{font-size:12px;color:#6b6a63;line-height:1.55;margin-bottom:12px}
.brand-campaigns{display:flex;flex-direction:column;gap:6px;margin-bottom:12px}
.bc-item{background:#f9f8f5;border-radius:8px;padding:9px 11px;border:0.5px solid #e0ddd6}
.bc-title{font-size:12px;font-weight:500;color:#1a1a18}
.bc-meta{display:flex;align-items:center;justify-content:space-between;margin-top:4px}
.bc-budget{font-size:11px;color:#16A34A;font-weight:500}
.bc-deadline{font-size:10px;color:#888780}
.brand-footer{display:flex;align-items:center;justify-content:space-between}
.brand-sports{display:flex;flex-wrap:wrap;gap:4px}
.apply-btn{font-size:11px;padding:5px 13px;background:#EA580C;color:#fff;border:none;border-radius:8px;cursor:pointer;font-weight:500;white-space:nowrap}
.apply-btn:hover{background:#C2410C}
.filter-row{display:flex;gap:8px;align-items:center;padding:12px 20px;border-bottom:0.5px solid #e0ddd6;flex-shrink:0;background:#fafaf8}
.filter-chip{font-size:11px;padding:4px 11px;border-radius:20px;border:0.5px solid #e0ddd6;background:#fff;color:#6b6a63;cursor:pointer;white-space:nowrap}
.filter-chip.on{background:#FEF3E9;border-color:#FDBA74;color:#C2410C;font-weight:500}
.brands-content{flex:1;overflow-y:auto;padding:20px}
</style>
</head>
<body>
<div class="app">
  <div class="sidebar">
    <div class="logo">
      <div class="logo-icon">⛰</div>
      <span class="logo-text">Ridgeline</span>
    </div>
    <nav class="nav">
      <div class="nav-item" onclick="show('dashboard')">🏠 Dashboard</div>
      <div class="nav-item active" onclick="show('athletes')">👥 Athletes</div>
      <div class="nav-item" onclick="show('brands')">🏢 Brands</div>
      <div class="nav-item" onclick="show('campaigns')">💼 Campaigns</div>
      <div class="nav-item" onclick="show('messages')">💬 Messages</div>
      <div class="nav-item" onclick="show('profile')">👤 My Profile</div>
    </nav>
    <div class="sidebar-footer">
      <div class="avatar-row">
        <div class="avatar">AP</div>
        <div><p style="font-size:12px;font-weight:500;color:#1a1a18">Apex Gear Co.</p><span style="font-size:11px;color:#888780">Brand</span></div>
      </div>
    </div>
  </div>

  <div class="main">

    <div class="view active" id="view-athletes">
      <div class="topbar">
        <div><div class="topbar-title">Browse athletes</div><div class="topbar-sub">2,400+ verified athletes across 10 sports</div></div>
        <div style="display:flex;gap:8px">
          <select style="font-size:12px;padding:6px 10px;border-radius:8px;border:0.5px solid #e0ddd6;background:#f5f4f0;color:#6b6a63"><option>All sports</option><option>Mountain biking</option><option>Skiing</option></select>
          <select style="font-size:12px;padding:6px 10px;border-radius:8px;border:0.5px solid #e0ddd6;background:#f5f4f0;color:#6b6a63"><option>All levels</option><option>Elite</option><option>Pro</option></select>
        </div>
      </div>
      <div class="content">
        <div class="stat-grid">
          <div class="stat accent"><div class="stat-label">Open to deals</div><div class="stat-val">1,840</div></div>
          <div class="stat"><div class="stat-label">Elite athletes</div><div class="stat-val">312</div></div>
          <div class="stat"><div class="stat-label">Avg. followers</div><div class="stat-val">84K</div></div>
          <div class="stat"><div class="stat-label">Sports covered</div><div class="stat-val">10</div></div>
        </div>
        <div class="section-label">Featured athletes</div>
        <div class="athlete-grid">
          <div class="athlete-card"><div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px"><div><div class="ac-name">Jake Morrison</div><div class="ac-loc">📍 Bend, OR</div></div><span class="badge badge-elite">Elite</span></div><div class="sport-tags"><span class="sport-tag">Mountain biking</span><span class="sport-tag">Enduro</span></div><div class="ac-footer"><span class="ac-followers">👥 248K</span><span class="ac-open">✓ Open to deals</span></div></div>
          <div class="athlete-card"><div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px"><div><div class="ac-name">Sofia Chen</div><div class="ac-loc">📍 Park City, UT</div></div><span class="badge badge-pro">Pro</span></div><div class="sport-tags"><span class="sport-tag">Skiing</span><span class="sport-tag">Freeride</span></div><div class="ac-footer"><span class="ac-followers">👥 192K</span><span class="ac-open">✓ Open to deals</span></div></div>
          <div class="athlete-card"><div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px"><div><div class="ac-name">Marcus Webb</div><div class="ac-loc">📍 Mammoth, CA</div></div><span class="badge badge-elite">Elite</span></div><div class="sport-tags"><span class="sport-tag">Snowboarding</span><span class="sport-tag">Halfpipe</span></div><div class="ac-footer"><span class="ac-followers">👥 415K</span><span class="ac-open">✓ Open to deals</span></div></div>
          <div class="athlete-card"><div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px"><div><div class="ac-name">Leila Oduya</div><div class="ac-loc">📍 Boulder, CO</div></div><span class="badge badge-pro">Pro</span></div><div class="sport-tags"><span class="sport-tag">Rock climbing</span></div><div class="ac-footer"><span class="ac-followers">👥 87K</span><span class="ac-open">✓ Open to deals</span></div></div>
          <div class="athlete-card"><div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px"><div><div class="ac-name">Ryo Tanaka</div><div class="ac-loc">📍 Whistler, BC</div></div><span class="badge badge-elite">Elite</span></div><div class="sport-tags"><span class="sport-tag">Mountain biking</span><span class="sport-tag">DH</span></div><div class="ac-footer"><span class="ac-followers">👥 331K</span><span class="ac-open">✓ Open to deals</span></div></div>
          <div class="athlete-card"><div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px"><div><div class="ac-name">Ingrid Lund</div><div class="ac-loc">📍 Åre, Sweden</div></div><span class="badge badge-semi">Semi-Pro</span></div><div class="sport-tags"><span class="sport-tag">Skiing</span><span class="sport-tag">Big mountain</span></div><div class="ac-footer"><span class="ac-followers">👥 54K</span><span class="ac-open">✓ Open to deals</span></div></div>
        </div>
      </div>
    </div>

    <div class="view" id="view-brands">
      <div class="topbar">
        <div><div class="topbar-title">Browse brands</div><div class="topbar-sub">340+ companies actively seeking athletes</div></div>
        <div style="display:flex;gap:8px">
          <select style="font-size:12px;padding:6px 10px;border-radius:8px;border:0.5px solid #e0ddd6;background:#f5f4f0;color:#6b6a63"><option>All industries</option><option>Outdoor / Gear</option><option>Apparel</option><option>Nutrition</option><option>Tech / Wearables</option></select>
          <select style="font-size:12px;padding:6px 10px;border-radius:8px;border:0.5px solid #e0ddd6;background:#f5f4f0;color:#6b6a63"><option>All sports</option><option>Mountain biking</option><option>Skiing</option><option>Snowboarding</option><option>Rock climbing</option></select>
        </div>
      </div>
      <div class="filter-row">
        <span style="font-size:11px;color:#888780;margin-right:4px">Filter:</span>
        <div class="filter-chip on">Actively hiring</div>
        <div class="filter-chip">Verified only</div>
        <div class="filter-chip">Budget $2K+</div>
        <div class="filter-chip">Long-term deals</div>
        <div class="filter-chip">Gear included</div>
      </div>
      <div class="brands-content">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
          <div class="section-label" style="margin-bottom:0">6 brands hiring now</div>
        </div>
        <div class="brand-grid">

          <!-- Brand 1 -->
          <div class="brand-card">
            <div class="brand-header">
              <div class="brand-logo" style="background:#FEF3E9">🏔️</div>
              <div style="flex:1;min-width:0">
                <div class="brand-name">Apex Gear Co. <span class="verified">✓ Verified</span></div>
                <div class="brand-industry">Outdoor Gear · Portland, OR</div>
              </div>
              <span class="tag-open">Hiring</span>
            </div>
            <div class="brand-desc">Performance trail and mountain gear designed by riders. We partner with elite athletes for authentic content and long-term ambassador roles.</div>
            <div style="font-size:11px;font-weight:500;color:#888780;margin-bottom:6px;text-transform:uppercase;letter-spacing:.04em">Open campaigns</div>
            <div class="brand-campaigns">
              <div class="bc-item">
                <div class="bc-title">Summer Trail Series 2025</div>
                <div class="bc-meta"><span class="bc-budget">$3,000–$5,000/mo</span><span class="bc-deadline">⛰ Mountain biking · Deadline Jun 15</span></div>
              </div>
              <div class="bc-item">
                <div class="bc-title">Winter Campaign 2026</div>
                <div class="bc-meta"><span class="bc-budget">$4,500–$7,000/mo</span><span class="bc-deadline">⛷ Skiing · Deadline Sep 1</span></div>
              </div>
            </div>
            <div class="brand-footer">
              <div class="brand-sports"><span class="sport-tag">MTB</span><span class="sport-tag">Skiing</span><span class="sport-tag">Snowboard</span></div>
              <button class="apply-btn">View & Apply</button>
            </div>
          </div>

          <!-- Brand 2 -->
          <div class="brand-card">
            <div class="brand-header">
              <div class="brand-logo" style="background:#F0FDF4">🌲</div>
              <div style="flex:1;min-width:0">
                <div class="brand-name">Ridgecrest Apparel <span class="verified">✓ Verified</span></div>
                <div class="brand-industry">Apparel · Boulder, CO</div>
              </div>
              <span class="tag-open">Hiring</span>
            </div>
            <div class="brand-desc">Technical apparel built for extreme conditions. Looking for athletes who push limits in the backcountry and aren't afraid to show it.</div>
            <div style="font-size:11px;font-weight:500;color:#888780;margin-bottom:6px;text-transform:uppercase;letter-spacing:.04em">Open campaigns</div>
            <div class="brand-campaigns">
              <div class="bc-item">
                <div class="bc-title">Backcountry Ambassador 2025</div>
                <div class="bc-meta"><span class="bc-budget">$2,500–$4,000/mo</span><span class="bc-deadline">🏂 Snowboard · Deadline Jul 30</span></div>
              </div>
              <div class="bc-item">
                <div class="bc-title">Climb Series — Gear Drop</div>
                <div class="bc-meta"><span class="bc-budget">$1,800–$3,200/mo</span><span class="bc-deadline">🧗 Rock climbing · Deadline Aug 10</span></div>
              </div>
            </div>
            <div class="brand-footer">
              <div class="brand-sports"><span class="sport-tag">Snowboard</span><span class="sport-tag">Climbing</span></div>
              <button class="apply-btn">View & Apply</button>
            </div>
          </div>

          <!-- Brand 3 -->
          <div class="brand-card">
            <div class="brand-header">
              <div class="brand-logo" style="background:#EFF6FF">⚡</div>
              <div style="flex:1;min-width:0">
                <div class="brand-name">Volt Nutrition</div>
                <div class="brand-industry">Sports Nutrition · Austin, TX</div>
              </div>
              <span class="tag-open">Hiring</span>
            </div>
            <div class="brand-desc">Clean-formula energy and recovery supplements trusted by pro athletes. Seeking authentic voices in action sports to join our athlete roster.</div>
            <div style="font-size:11px;font-weight:500;color:#888780;margin-bottom:6px;text-transform:uppercase;letter-spacing:.04em">Open campaigns</div>
            <div class="brand-campaigns">
              <div class="bc-item">
                <div class="bc-title">Endurance Athlete Program</div>
                <div class="bc-meta"><span class="bc-budget">$1,500–$2,800/mo</span><span class="bc-deadline">🚵 MTB · Skiing · Rolling basis</span></div>
              </div>
            </div>
            <div class="brand-footer">
              <div class="brand-sports"><span class="sport-tag">MTB</span><span class="sport-tag">Skiing</span><span class="sport-tag">Motocross</span></div>
              <button class="apply-btn">View & Apply</button>
            </div>
          </div>

          <!-- Brand 4 -->
          <div class="brand-card">
            <div class="brand-header">
              <div class="brand-logo" style="background:#FFF7ED">🎥</div>
              <div style="flex:1;min-width:0">
                <div class="brand-name">PeakFrame Media <span class="verified">✓ Verified</span></div>
                <div class="brand-industry">Action Sports Media · Whistler, BC</div>
              </div>
              <span class="tag-open">Hiring</span>
            </div>
            <div class="brand-desc">We produce world-class action sports content for brands and athletes. Looking for riders to feature in our 2025–26 film projects and social campaigns.</div>
            <div style="font-size:11px;font-weight:500;color:#888780;margin-bottom:6px;text-transform:uppercase;letter-spacing:.04em">Open campaigns</div>
            <div class="brand-campaigns">
              <div class="bc-item">
                <div class="bc-title">2025 Film Project — Riders Wanted</div>
                <div class="bc-meta"><span class="bc-budget">$5,000–$10,000 flat</span><span class="bc-deadline">🎿 Skiing · MTB · Deadline May 31</span></div>
              </div>
              <div class="bc-item">
                <div class="bc-title">Social Content Series Q3</div>
                <div class="bc-meta"><span class="bc-budget">$2,000–$3,500/mo</span><span class="bc-deadline">🏂 All sports · Deadline Jul 1</span></div>
              </div>
            </div>
            <div class="brand-footer">
              <div class="brand-sports"><span class="sport-tag">MTB</span><span class="sport-tag">Skiing</span><span class="sport-tag">Snowboard</span><span class="sport-tag">Climbing</span></div>
              <button class="apply-btn">View & Apply</button>
            </div>
          </div>

          <!-- Brand 5 -->
          <div class="brand-card">
            <div class="brand-header">
              <div class="brand-logo" style="background:#F5F3FF">🔬</div>
              <div style="flex:1;min-width:0">
                <div class="brand-name">TrailTech Wearables</div>
                <div class="brand-industry">Tech / Wearables · San Francisco, CA</div>
              </div>
              <span class="tag-open">Hiring</span>
            </div>
            <div class="brand-desc">GPS and biometric wearables built for trail and mountain athletes. Partnering with athletes to beta-test and promote our next-gen devices.</div>
            <div style="font-size:11px;font-weight:500;color:#888780;margin-bottom:6px;text-transform:uppercase;letter-spacing:.04em">Open campaigns</div>
            <div class="brand-campaigns">
              <div class="bc-item">
                <div class="bc-title">Beta Tester Ambassador Program</div>
                <div class="bc-meta"><span class="bc-budget">$1,200–$2,500/mo + gear</span><span class="bc-deadline">🚵 MTB · ⛷ Ski · Rolling</span></div>
              </div>
            </div>
            <div class="brand-footer">
              <div class="brand-sports"><span class="sport-tag">MTB</span><span class="sport-tag">Skiing</span><span class="sport-tag">Trail running</span></div>
              <button class="apply-btn">View & Apply</button>
            </div>
          </div>

          <!-- Brand 6 -->
          <div class="brand-card">
            <div class="brand-header">
              <div class="brand-logo" style="background:#FFF1F2">🪖</div>
              <div style="flex:1;min-width:0">
                <div class="brand-name">IronHelm Protection <span class="verified">✓ Verified</span></div>
                <div class="brand-industry">Protective Gear · Innsbruck, Austria</div>
              </div>
              <span class="tag-open">Hiring</span>
            </div>
            <div class="brand-desc">Premium helmets and body armor for downhill, freeride, and snow sports. Seeking elite athletes who demand the best in protection for global ambassador roles.</div>
            <div style="font-size:11px;font-weight:500;color:#888780;margin-bottom:6px;text-transform:uppercase;letter-spacing:.04em">Open campaigns</div>
            <div class="brand-campaigns">
              <div class="bc-item">
                <div class="bc-title">Elite Ambassador — Europe & NA</div>
                <div class="bc-meta"><span class="bc-budget">$4,000–$8,000/mo</span><span class="bc-deadline">🚵 MTB · 🏂 Snow · Deadline Aug 15</span></div>
              </div>
            </div>
            <div class="brand-footer">
              <div class="brand-sports"><span class="sport-tag">MTB</span><span class="sport-tag">DH</span><span class="sport-tag">Snowboard</span><span class="sport-tag">Ski</span></div>
              <button class="apply-btn">View & Apply</button>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="view" id="view-dashboard">
      <div class="topbar"><div><div class="topbar-title">Good morning, Apex Gear 👋</div><div class="topbar-sub">Here's your brand activity overview</div></div></div>
      <div class="content">
        <div class="stat-grid">
          <div class="stat accent"><div class="stat-label">Open campaigns</div><div class="stat-val">3</div></div>
          <div class="stat"><div class="stat-label">New applications</div><div class="stat-val">14</div></div>
          <div class="stat"><div class="stat-label">Active deals</div><div class="stat-val">2</div></div>
          <div class="stat"><div class="stat-label">Unread messages</div><div class="stat-val">5</div></div>
        </div>
        <div class="section-label" style="margin-bottom:10px">Recent applications</div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <div style="background:#fff;border:0.5px solid #e0ddd6;border-radius:12px;padding:14px;display:flex;align-items:center;justify-content:space-between"><div style="display:flex;align-items:center;gap:10px"><div class="avatar">JM</div><div><div style="font-size:13px;font-weight:500;color:#1a1a18">Jake Morrison</div><div style="font-size:11px;color:#888780">Applied to: Summer Trail Series 2025</div></div></div><div style="display:flex;gap:6px"><button style="font-size:11px;padding:5px 10px;border-radius:8px;border:0.5px solid #BBF7D0;background:#DCFCE7;color:#166534;cursor:pointer">Accept</button><button style="font-size:11px;padding:5px 10px;border-radius:8px;border:0.5px solid #e0ddd6;background:#f5f4f0;color:#6b6a63;cursor:pointer">Decline</button></div></div>
          <div style="background:#fff;border:0.5px solid #e0ddd6;border-radius:12px;padding:14px;display:flex;align-items:center;justify-content:space-between"><div style="display:flex;align-items:center;gap:10px"><div class="avatar">SC</div><div><div style="font-size:13px;font-weight:500;color:#1a1a18">Sofia Chen</div><div style="font-size:11px;color:#888780">Applied to: Winter Campaign 2026</div></div></div><div style="display:flex;gap:6px"><button style="font-size:11px;padding:5px 10px;border-radius:8px;border:0.5px solid #BBF7D0;background:#DCFCE7;color:#166534;cursor:pointer">Accept</button><button style="font-size:11px;padding:5px 10px;border-radius:8px;border:0.5px solid #e0ddd6;background:#f5f4f0;color:#6b6a63;cursor:pointer">Decline</button></div></div>
        </div>
      </div>
    </div>

    <div class="view msgs" id="view-messages">
      <div class="convo-list">
        <div class="convo-header">Messages</div>
        <div class="convo-item active"><div class="avatar" style="width:32px;height:32px;font-size:11px">JM</div><div style="min-width:0;flex:1"><div class="ci-name">Jake Morrison</div><div class="ci-preview">Sounds great, I can deliver…</div></div><div class="ci-time">2m</div></div>
        <div class="convo-item"><div class="avatar" style="width:32px;height:32px;font-size:11px">SC</div><div style="min-width:0;flex:1"><div class="ci-name">Sofia Chen</div><div class="ci-preview">Love the campaign brief!</div></div><div class="ci-time">1h</div></div>
        <div class="convo-item"><div class="avatar" style="width:32px;height:32px;font-size:11px">RT</div><div style="min-width:0;flex:1"><div class="ci-name">Ryo Tanaka</div><div class="ci-preview">What's the usage window?</div></div><div class="ci-time">3h</div></div>
      </div>
      <div class="thread">
        <div class="thread-header"><div class="avatar" style="width:32px;height:32px;font-size:11px">JM</div><div><div style="font-size:13px;font-weight:500;color:#1a1a18">Jake Morrison</div><div style="font-size:11px;color:#888780">Athlete · Mountain biking</div></div></div>
        <div class="messages">
          <div class="msg"><div class="avatar" style="width:26px;height:26px;font-size:10px;flex-shrink:0">JM</div><div><div class="bubble them">Hey! Saw your Summer Trail Series campaign — looks like a great fit with my riding style.</div><div class="msg-time">10:24 AM</div></div></div>
          <div class="msg me"><div><div class="bubble me">Hi Jake! Yes, we think so too. Your Bend enduro content is exactly the vibe we're going for. What's your rate for a 3-month deal?</div><div class="msg-time" style="text-align:right">10:26 AM</div></div></div>
          <div class="msg"><div class="avatar" style="width:26px;height:26px;font-size:10px;flex-shrink:0">JM</div><div><div class="bubble them">Sounds great, I can deliver 4 posts/month + 1 Reel. Looking at $3,500/month. Happy to discuss deliverables!</div><div class="msg-time">10:29 AM</div></div></div>
        </div>
        <div class="msg-input-row"><input class="msg-input" placeholder="Type a message…"/><button class="send-btn">➤</button></div>
      </div>
    </div>

    <div class="view" id="view-campaigns">
      <div class="topbar"><div><div class="topbar-title">Campaigns</div><div class="topbar-sub">Post deals and manage applications</div></div><button class="btn-primary">+ New campaign</button></div>
      <div class="campaigns-wrap">
        <div class="campaign-card"><div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px"><div><div class="cc-title">Summer Trail Series 2025</div><div class="cc-brand">Apex Gear Co. · Mountain biking, Enduro</div></div><span class="tag-open">Open</span></div><div class="cc-desc">Looking for 2–3 elite mountain bikers to document the summer trail season in the Pacific Northwest. Content across Instagram and YouTube. Full gear kit provided.</div><div style="display:flex;justify-content:space-between;align-items:center"><span class="cc-budget">$3,000 – $5,000 / mo</span><span style="font-size:11px;color:#888780">14 applications</span></div></div>
        <div class="campaign-card"><div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px"><div><div class="cc-title">Winter Campaign 2026</div><div class="cc-brand">Apex Gear Co. · Skiing, Snowboarding</div></div><span class="tag-open">Open</span></div><div class="cc-desc">Seeking pro-level skiers and snowboarders for our upcoming winter gear launch. 4 posts + 1 long-form video. Shoots in Mammoth and Whistler.</div><div style="display:flex;justify-content:space-between;align-items:center"><span class="cc-budget">$4,500 – $7,000 / mo</span><span style="font-size:11px;color:#888780">8 applications</span></div></div>
        <div class="campaign-card"><div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px"><div><div class="cc-title">Ambassador Program Q1</div><div class="cc-brand">Apex Gear Co. · All sports</div></div><span class="tag-draft">Draft</span></div><div class="cc-desc">Year-round ambassador role for up-and-coming athletes across all extreme sports. Equity-style deal with strong base + performance bonuses.</div><div style="display:flex;justify-content:space-between;align-items:center"><span class="cc-budget">$1,500 – $3,000 / mo</span><span style="font-size:11px;color:#888780">Not published</span></div></div>
      </div>
    </div>

    <div class="view" id="view-profile">
      <div class="topbar"><div><div class="topbar-title">Edit profile</div><div class="topbar-sub">A complete profile gets 4× more athlete interest</div></div><button class="save-btn">💾 Save changes</button></div>
      <div class="profile-wrap">
        <div class="profile-card"><div class="pc-title">Brand info</div><div class="field-row"><div class="field"><label>Company name</label><input value="Apex Gear Co."/></div><div class="field"><label>Industry</label><input value="Outdoor / Action Sports"/></div></div><div class="field" style="margin-bottom:10px"><label>Bio</label><textarea rows="3">We make performance trail and mountain gear designed by riders, for riders. Based in Portland, OR.</textarea></div><div class="field-row"><div class="field"><label>Location</label><input value="Portland, OR"/></div><div class="field"><label>Website</label><input value="https://apexgear.co"/></div></div></div>
        <div class="profile-card"><div class="pc-title">Sports we sponsor</div><div class="sport-chips"><div class="chip on">Mountain biking</div><div class="chip on">Skiing</div><div class="chip on">Snowboarding</div><div class="chip">Rock climbing</div><div class="chip">Motocross</div><div class="chip">Surfing</div><div class="chip">Skydiving</div><div class="chip">Parkour</div></div></div>
        <div class="profile-card"><div class="pc-title">Deal preferences</div><div class="field-row"><div class="field"><label>Typical budget range</label><input value="$2,000 – $7,000 / month"/></div><div class="field"><label>Company size</label><select><option>Small (10–50)</option><option>Medium</option><option>Large</option></select></div></div></div>
      </div>
    </div>

  </div>
</div>
<script>
const views=['dashboard','athletes','brands','campaigns','messages','profile'];
function show(id){
  views.forEach(v=>{
    document.getElementById('view-'+v).classList.toggle('active',v===id);
  });
  document.querySelectorAll('.nav-item').forEach((n,i)=>{
    n.classList.toggle('active',['dashboard','athletes','brands','campaigns','messages','profile'][i]===id);
  });
}
</script>
</body>
</html>
